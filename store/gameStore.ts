import { defineStore } from "pinia";

export type playerType =
  | "scissors"
  | "paper"
  | "rock"
  | "lizard"
  | "cyan"
  | null;

export type gameState = "won" | "lost" | "draw";
export const useGameStore = defineStore("game", () => {
  const defaultData = {
    player: null,
    opponent: null,
    state: "lost" as gameState,
    finished: false,
  };

  const data = reactive<{
    data: {
      player: playerType;
      opponent: playerType;
      state: gameState;
      finished: boolean;
    };
  }>({
    data: {
      player: defaultData.player,
      opponent: defaultData.opponent,
      state: defaultData.state as gameState,
      finished: defaultData.finished,
    },
  });

  const setPlayer = (value: playerType) => {
    data.data.player = value;
  };

  const setOpponent = (value: playerType) => {
    data.data.opponent = value;
  };

  const reset = () => {
    data.data = {
      player: defaultData.player,
      opponent: defaultData.opponent,
      state: defaultData.state as gameState,
      finished: defaultData.finished,
    };
  };

  return { data, setPlayer, setOpponent, reset };
});
