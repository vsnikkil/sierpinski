import store from "./store/index";
import sierpinski, { drawTriangle, getCanvasDimensions } from "./sierpinski";
import {
  decreaseDepth,
  increaseDepth,
  setDepth,
  toggleDebug
} from "./store/actionCreators";

store.subscribe(() => {
  const { width, height } = getCanvasDimensions();
  const x0 = width / 2;
  const y0 = height / 2;
  const r0 = Math.min(width, height) / 2;
  const { debug, depth } = store.getState();
  
  sierpinski(x0, y0, r0, depth, debug);
});

store.dispatch(setDepth(3));

const increaseDepthButton = document.createElement("button");
const decreaseDepthButton = document.createElement("button");
const toggleDebugButton = document.createElement("button");
const buttonPanel = document.createElement("div");
const body = document.querySelector("body");

increaseDepthButton.textContent = "increase depth";
decreaseDepthButton.textContent = "decrease depth";
toggleDebugButton.textContent = "toggle debug";

increaseDepthButton.addEventListener("click", () => store.dispatch(increaseDepth()));
decreaseDepthButton.addEventListener("click", () => store.dispatch(decreaseDepth()));
toggleDebugButton.addEventListener("click", () => store.dispatch(toggleDebug()));


buttonPanel.setAttribute("class", "button-panel");
[increaseDepthButton, decreaseDepthButton, toggleDebugButton].forEach(button => {
  button.setAttribute("class", "depth-button");
  buttonPanel.appendChild(button);
});

body.appendChild(buttonPanel);
