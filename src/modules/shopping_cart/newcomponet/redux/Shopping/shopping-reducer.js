import * as actionTypes from "./shopping-types";

let lastId = 0;

const shopReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [
        ...state, {
          id: ++lastId,
          AnimalId: action.payload.AnimalId,
          price: action.payload.price,
        }
      ]

    default:
      return state;
  }
};

export default shopReducer;
