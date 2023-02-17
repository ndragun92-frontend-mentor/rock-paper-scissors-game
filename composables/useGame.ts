import type { playerType } from "~/store/gameStore";
import { useGameStore } from "~/store/gameStore";
import { promiseTimeout } from "@vueuse/core";

export default function useGame() {
  const gameStore = useGameStore();
  const botPlay = async () => {
    const card = pickRandom();
    gameStore.setOpponent(card);
    winner();
    await promiseTimeout(1000);
    gameStore.data.finished = true;
  };

  const availableCardsSimple = ["scissors", "paper", "rock"] as playerType[];
  const pickRandom = () => {
    console.log(availableCardsSimple);
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
    const playerChoice = gameStore.data.player;
    const opponentChoice = gameStore.data.opponent;
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
    }
  };

  const won = () => {
    gameStore.data.state = "won";
    gameStore.data.score++;
  };

  const draw = () => {
    gameStore.data.state = "draw";
  };

  const lost = () => {
    if (gameStore.data.score > 0) {
      gameStore.data.score--;
    }
  };

  const playAgain = () => {
    gameStore.reset();
  };

  return { botPlay, pluralize, playAgain };
}
