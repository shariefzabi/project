import * as actionTypes from "./shopping-types";
import appStore from "../../../../../state/app_store";

export const addToCart = (itemID, itemPrice) => {
  appStore.dispatch({
    type: "ADD_TO_CART",
    payload: {
      AnimalId: itemID,
      price: itemPrice
    },
  })
  console.log("++++", appStore.getState());
};


export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
