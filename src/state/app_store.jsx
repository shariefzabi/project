// import { createStore } from "redux";
import { createStore } from "redux";
import appReducer from "./appReducers"
// const appStore = createStore(appReducer);
// export default appStore;

import shopReducer from "../modules/shopping_cart/newcomponet/redux/Shopping/shopping-reducer";

const appStore = createStore(appReducer);
export default appStore;
