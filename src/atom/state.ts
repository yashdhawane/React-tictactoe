import { atom } from 'recoil';

// Atom to store the state of the squares
export const squaresState = atom({
  key: 'squaresState', // unique ID (with respect to other atoms/selectors)
  default: Array(9).fill(null), // default value
});

// Atom to store the state of the next player (X or O)
export const isXNextState = atom({
  key: 'isXNextState',
  default: true, // X starts first
});