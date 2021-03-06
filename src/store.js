import { createStore, combineReducers } from "redux";
import persistState from "redux-localstorage";
import session from "./session/reducer";

const rootReducer = combineReducers({
  session: session
});

const enhancer = persistState(rootReducer.place);

const store = createStore(rootReducer, {}, enhancer);

export { store };
