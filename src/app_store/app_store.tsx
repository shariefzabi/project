import { createStore } from "redux";
import appReducer from '../app_reducers/appReducers'

const appStore = createStore(appReducer);

export default appStore;