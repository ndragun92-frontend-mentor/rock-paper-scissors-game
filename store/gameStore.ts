import { defineStore } from "pinia";

export enum CardEnum {
  scissors = "scissors",
  paper = "paper",
  rock = "rock",
  lizard = "lizard",
  spock = "spock",
}

export type PlayerType =
  | CardEnum.scissors
  | CardEnum.paper
  | CardEnum.rock
  | CardEnum.lizard
  | CardEnum.spock
  | null;

export enum GameEnum {
  won = "won",
  lost = "lost",
  draw = "draw",
}

export type GameState = GameEnum.won | GameEnum.lost | GameEnum.draw;
export const useGameStore = defineStore("game", () => {
  const defaultData = {
    player: null,
    opponent: null,
    state: GameEnum.lost as GameState,
    finished: false,
  };

  const data = reactive<{
    data: {
      player: PlayerType;
      opponent: PlayerType;
      state: GameState;
      finished: boolean;
    };
  }>({
    data: {
      player: defaultData.player,
      opponent: defaultData.opponent,
      state: defaultData.state as GameState,
      finished: defaultData.finished,
    },
  });

  const setPlayer = (value: PlayerType) => {
    data.data.player = value;
  };

  const setOpponent = (value: PlayerType) => {
    data.data.opponent = value;
  };

  const reset = () => {
    data.data = {
      player: defaultData.player,
      opponent: defaultData.opponent,
      state: defaultData.state as GameState,
      finished: defaultData.finished,
    };
  };

  return { data, setPlayer, setOpponent, reset };
});
