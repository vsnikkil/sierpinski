import {
  DECREASE_DEPTH,
  INCREASE_DEPTH,
  SET_DEPTH,
  TOGGLE_DEBUG
} from "./actions";

export function decreaseDepth() {
  return {
    type: DECREASE_DEPTH,
  };
}

export function increaseDepth() {
  return {
    type: INCREASE_DEPTH,
  };
}

export function setDepth(depth) {
  return {
    type: SET_DEPTH,
    payload: depth,
  };
}

export function toggleDebug(value) {
  return {
    type: TOGGLE_DEBUG,
    payload: value,
  }
}
