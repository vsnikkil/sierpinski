import { createStore } from "redux";
import sierpinskiReducer from "./reducers";

const store = createStore(
  sierpinskiReducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
