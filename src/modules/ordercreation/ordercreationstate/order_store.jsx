import { createStore } from "redux";
import orderReducer from './orderReducers'

const orderStore = createStore(orderReducer);

export default orderStore;