import create, { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

type GameState = {
  [key: number]: boolean;
};

const createState: StateCreator<GameState> = (set) => ({
  initState: () => set({}),
  clear: () => set({}),
  setInfo: (state) => set(state),
});

export const useGame = create(persist(createState, { name: 'ywvalentine2022' }));
