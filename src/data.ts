import { Picture } from "./Picture";

export const one: Picture = [[0]];

export const two: Picture = [
  [0, 0],
  [1, 1],
];

export const three: Picture = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 1],
];

export const four: Picture = [
  [0, 1, 0, 1],
  [1, 0, 1, 0],
  [0, 1, 1, 1],
  [0, 1, 1, 1],
];

export const five: Picture = [
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 1, 0, 0],
];

export const six: Picture = [
  [0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 0, 1],
  [0, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0, 1],
  [0, 1, 1, 0, 0, 0],
  [1, 1, 1, 0, 1, 0],
];
