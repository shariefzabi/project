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
  // return {
  //   type: "ADD_TO_CART",
  //   payload: {
  //     AnimalId: itemID,
  //   },
  // };
};

// export const removeFromCart = (itemID:any) => {
//   return {
//     type: actionTypes.REMOVE_FROM_CART,
//     payload: {
//       id: itemID,
//     },
//   };
// };

// export const adjustItemQty = (itemID:any, qty:any) => {
//   return {
//     type: actionTypes.ADJUST_ITEM_QTY,
//     payload: {
//       id: itemID,
//       qty,
//     },
//   };
// };

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
