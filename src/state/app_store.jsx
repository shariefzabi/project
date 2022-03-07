import { createStore } from "redux";
import appReducer from './appReducers'

const appStore = createStore(appReducer);

export default appStore;