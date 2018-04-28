import { createCanvas, translateXY } from "./utils";
const FULL_RAD = 2 * Math.PI;

function polygonPoints(corners, xOff, yOff, r, rotation) {
  return [...new Array(corners)].map((v, idx) =>
    translateXY(xOff, yOff, r, rotation + FULL_RAD / corners * idx)
  );
}

const drawPolygon = (() => {
  const body = document.querySelector("body");
  const canvas = createCanvas();
  const ctx = canvas.getContext("2d");
  const { width, height } = body.getBoundingClientRect();
  body.appendChild(canvas);

  [["width", width], ["height", height]].forEach(([attribute, value]) =>
    canvas.setAttribute(attribute, value)
  );

  return function drawPolygonToContext(corners, x, y, r = 100, f = false) {
    const rotation = f ? 0 : Math.PI;
    const points = polygonPoints(corners, x, y, r, rotation);

    ctx.beginPath();
    ctx.moveTo(...points[0]);
    points.slice(1).forEach(p => ctx.lineTo(...p));
    ctx.closePath();
    ctx.fillStyle = f ? "black" : "white";
    ctx.fill();
  };
})();

export const drawTriangle = (...props) => drawPolygon(3, ...props);

export default function sierpinski(x, y, r, depth) {
  drawTriangle(x, y, r, true);

  function inner(x, y, r, depth) {
    if (depth <= 0) {
      return;
    }

    drawTriangle(x, y, r);

    const newPoints = [...new Array(3)]
      .map((v, idx) => translateXY(x, y, r, FULL_RAD / 3 * idx))
      .forEach(([x, y]) => {
        inner(x, y, r / 2, depth - 1);
      });
  }
  inner(x, y, r / 2, depth);
}
