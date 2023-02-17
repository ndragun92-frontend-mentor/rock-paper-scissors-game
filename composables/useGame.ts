import type { gameState, playerType } from "~/store/gameStore";
import { useGameStore } from "~/store/gameStore";
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

  const availableCardsSimple = ["scissors", "paper", "rock"] as playerType[];
  const pickRandom = () => {
    return availableCardsSimple[
      Math.floor(Math.random() * availableCardsSimple.length)
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
      case "rock":
        if (opponentChoice === "paper") {
          won();
        } else if (opponentChoice === "rock") {
          draw();
        } else if (opponentChoice === "scissors") {
          lost();
        }
        break;
      case "paper":
        if (opponentChoice === "rock") {
          won();
        } else if (opponentChoice === "paper") {
          draw();
        } else if (opponentChoice === "scissors") {
          lost();
        }
        break;
      case "scissors":
        if (opponentChoice === "paper") {
          won();
        } else if (opponentChoice === "scissors") {
          draw();
        } else if (opponentChoice === "rock") {
          lost();
        }
        break;
    }
  };

  const won = () => {
    gameStore.data.data.state = "won";
    game.value.data.score++;
    audioPlay("won");
  };

  const draw = () => {
    gameStore.data.data.state = "draw";
    audioPlay("draw");
  };

  const lost = () => {
    if (game.value.data.score > 0) {
      game.value.data.score--;
    }
    audioPlay("lost");
  };

  const playAgain = () => {
    gameStore.reset();
  };

  const audioPlay = (type: gameState) => {
    let audioPath;
    switch (type) {
      case "won":
        audioPath = new URL(`/audio/won.mp3`, import.meta.url).href;
        break;
      case "lost":
        audioPath = new URL(`/audio/lost.mp3`, import.meta.url).href;
        break;
      case "draw":
        audioPath = new URL(`/audio/draw.mp3`, import.meta.url).href;
        break;
    }
    if (!audioPath) return;
    const lostAudio = new Audio(audioPath);
    lostAudio?.play();
  };

  return { game, botPlay, pluralize, playAgain };
}
