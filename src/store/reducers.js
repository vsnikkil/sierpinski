import {
  INCREASE_DEPTH,
  DECREASE_DEPTH,
  SET_DEPTH,
  TOGGLE_DEBUG
} from "./actions";

const MAX_DEPTH = 10;
function sierpinskiReducer(
  state = {
    depth: 0,
    debug: false,
  },
  { type, payload }
) {
  switch (type) {
    case DECREASE_DEPTH:
      return {
        ...state,
        depth: Math.max(state.depth - 1, 0),
      }
    case INCREASE_DEPTH:
      return {
        ...state,
        depth: Math.min(state.depth + 1, MAX_DEPTH),
      }
    case SET_DEPTH:
      return {
        ...state,
        depth: Math.max(
          Math.min(payload, MAX_DEPTH),
          0
        ),
      };
    case TOGGLE_DEBUG:
      return {
        ...state,
        debug: payload !== undefined ? payload : !state.debug
      }
  }
}

export default sierpinskiReducer;
