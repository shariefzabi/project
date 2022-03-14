// import { createStore } from "redux";
import { createStore } from "redux";
import appReducer from "./appReducers"
const appStore = createStore(appReducer);
export default appStore;


// import {composeWithDevTools } from 'redux-devtools-extension'

// import shopReducer from '../../src/modules/shopping_cart/newcomponet/redux/Shopping/shopping-reducer';

// const appStore = createStore(shopReducer);
// export default appStore;

