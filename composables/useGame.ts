import type { GameState, PlayerType } from "~/store/gameStore";
import { CardEnum, GameEnum, useGameStore } from "~/store/gameStore";
import { promiseTimeout, useStorage } from "@vueuse/core";

export default function useGame() {
  const gameStore = useGameStore();

  const game = useStorage("game-score", {
    data: {
      score: 0,
    },
  });
  const botPlay = async () => {
    const card = pickRandom();
    gameStore.setOpponent(card);
    winner();
    await promiseTimeout(1000);
    gameStore.data.data.finished = true;
  };

  const availableCardsSimple = computed<PlayerType[]>(() => {
    if (isBonusGame.value) {
      return [
        CardEnum.scissors,
        CardEnum.paper,
        CardEnum.rock,
        CardEnum.lizard,
        CardEnum.spock,
      ];
    } else {
      return [CardEnum.scissors, CardEnum.paper, CardEnum.rock];
    }
  });

  const isBonusGame = computed(() => game.value.data.score >= 5);
  const pickRandom = () => {
    return availableCardsSimple.value[
      Math.floor(Math.random() * availableCardsSimple.value.length)
    ];
  };

  const pluralize = (val, word, plural = word + "s") => {
    const _pluralize = (num, word, plural = word + "s") =>
      [1, -1].includes(Number(num)) ? word : plural;
    if (typeof val === "object")
      return (num, word) => _pluralize(num, word, val[word]);
    return _pluralize(val, word, plural);
  };

  const winner = () => {
    const playerChoice = gameStore.data.data.player;
    const opponentChoice = gameStore.data.data.opponent;
    switch (playerChoice) {
      case CardEnum.rock:
        if ([CardEnum.scissors, CardEnum.lizard].includes(opponentChoice!)) {
          won();
        } else if (opponentChoice === CardEnum.rock) {
          draw();
        } else if ([CardEnum.paper, CardEnum.spock].includes(opponentChoice!)) {
          lost();
        }
        break;
      case CardEnum.paper:
        if ([CardEnum.rock, CardEnum.spock].includes(opponentChoice!)) {
          won();
        } else if (opponentChoice === CardEnum.paper) {
          draw();
        } else if (
          [CardEnum.scissors, CardEnum.lizard].includes(opponentChoice!)
        ) {
          lost();
        }
        break;
      case CardEnum.scissors:
        if ([CardEnum.paper, CardEnum.lizard].includes(opponentChoice!)) {
          won();
        } else if (opponentChoice === CardEnum.scissors) {
          draw();
        } else if ([CardEnum.spock, CardEnum.rock].includes(opponentChoice!)) {
          lost();
        }
        break;
      case CardEnum.lizard:
        if ([CardEnum.spock, CardEnum.paper].includes(opponentChoice!)) {
          won();
        } else if (opponentChoice === CardEnum.lizard) {
          draw();
        } else if (
          [CardEnum.scissors, CardEnum.rock].includes(opponentChoice!)
        ) {
          lost();
        }
        break;
      case CardEnum.spock:
        if ([CardEnum.scissors, CardEnum.rock].includes(opponentChoice!)) {
          won();
        } else if (opponentChoice === CardEnum.spock) {
          draw();
        } else if (
          [CardEnum.lizard, CardEnum.paper].includes(opponentChoice!)
        ) {
          lost();
        }
        break;
    }
  };

  const won = () => {
    gameStore.data.data.state = GameEnum.won;
    game.value.data.score++;
    audioPlay(GameEnum.won);
  };

  const draw = () => {
    gameStore.data.data.state = GameEnum.draw;
    audioPlay(GameEnum.draw);
  };

  const lost = () => {
    if (game.value.data.score > 0) {
      game.value.data.score--;
    }
    audioPlay(GameEnum.lost);
  };

  const playAgain = () => {
    gameStore.reset();
  };

  const audioPlay = (type: GameState) => {
    let audioPath;
    switch (type) {
      case GameEnum.won:
        audioPath = new URL(`/audio/won.mp3`, import.meta.url).href;
        break;
      case GameEnum.lost:
        audioPath = new URL(`/audio/lost.mp3`, import.meta.url).href;
        break;
      case GameEnum.draw:
        audioPath = new URL(`/audio/draw.mp3`, import.meta.url).href;
        break;
    }
    if (!audioPath) return;
    const lostAudio = new Audio(audioPath);
    lostAudio?.play();
  };

  return { game, botPlay, pluralize, playAgain, isBonusGame };
}
