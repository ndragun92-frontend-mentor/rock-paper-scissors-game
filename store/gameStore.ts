import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export type playerType =
  | "scissors"
  | "paper"
  | "rock"
  | "lizard"
  | "cyan"
  | null;

type gameState = "won" | "lost" | "draw";
export const useGameStore = defineStore("game", () => {
  const defaultData = {
    score: 0,
    player: null,
    opponent: null,
    state: "lost" as gameState,
    finished: false,
  };

  const data = useStorage<{
    score: number;
    player: playerType;
    opponent: playerType;
    state: gameState;
    finished: boolean;
  }>("game-data", defaultData);

  const setScore = (score: number) => {
    data.value.score = score;
  };

  const setPlayer = (value: playerType) => {
    data.value.player = value;
  };

  const setOpponent = (value: playerType) => {
    data.value.opponent = value;
  };

  const reset = () => {
    data.value = {
      ...defaultData,
      score: data.value.score,
    };
  };

  return { data, setScore, setPlayer, setOpponent, reset };
});
