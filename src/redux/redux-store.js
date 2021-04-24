import {combineReducers, compose, createStore} from "redux";
import StepProgressReducer from "./StepProgress-reducer";


const reducers = combineReducers({
  step: StepProgressReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers);

export default store;