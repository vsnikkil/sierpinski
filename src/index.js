import sierpinski, { drawTriangle } from "./sierpinski";

const { width, height } = document
  .querySelector("canvas")
  .getBoundingClientRect();
const x0 = width / 2;
const y0 = height / 2;
const r0 = Math.min(width, height) / 2;

sierpinski(x0, y0, r0, 7);
