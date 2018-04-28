export function createCanvas() {
  return document.createElement("canvas");
}

export function translateXY(x, y, r, rad) {
  return [
    x + Math.cos(rad - Math.PI / 2) * r,
    y + Math.sin(rad - Math.PI / 2) * r
  ];
}
