import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

type playerType = "scissors" | "paper" | "rock" | "lizard" | "cyan" | null;
export const useGameStore = defineStore("game", () => {
  const data = useStorage<{
    score: number;
    player: playerType;
    opponent: playerType;
  }>("game-data", {
    score: 0,
    player: null,
    opponent: null,
  });

  const setScore = (score: number) => {
    data.value.score = score;
  };

  const setPlayer = (value: playerType) => {
    data.value.player = value;
  };

  const setOpponent = (value: playerType) => {
    data.value.opponent = value;
  };

  return { data, setScore, setPlayer, setOpponent };
});
