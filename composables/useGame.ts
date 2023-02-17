import type { playerType } from "~/store/gameStore";
import { useGameStore } from "~/store/gameStore";

export default function useGame() {
  const gameStore = useGameStore();
  const botPlay = () => {
    console.log("botPlay", pickRandom());
    const card = pickRandom();
    gameStore.setOpponent(card);
  };

  const availableCardsSimple = ["scissors", "paper", "rock"] as playerType[];
  const pickRandom = () => {
    console.log(availableCardsSimple);
    const randomCard =
      availableCardsSimple[
        Math.floor(Math.random() * availableCardsSimple.length)
      ];
    console.log("randomCard", randomCard);
    return randomCard;
  };

  const pluralize = (val, word, plural = word + "s") => {
    const _pluralize = (num, word, plural = word + "s") =>
      [1, -1].includes(Number(num)) ? word : plural;
    if (typeof val === "object")
      return (num, word) => _pluralize(num, word, val[word]);
    return _pluralize(val, word, plural);
  };

  return { botPlay, pluralize };
}
