import { createStore } from "redux";



// import {composeWithDevTools } from 'redux-devtools-extension'

import shopReducer from '../../src/modules/shopping_cart/newcomponet/redux/Shopping/shopping-reducer';




const appStore = createStore(shopReducer);
export default appStore;

