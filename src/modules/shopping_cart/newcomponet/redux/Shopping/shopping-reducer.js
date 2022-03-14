import * as actionTypes from "./shopping-types";


const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "This is the COOLEST Cube Ever",
      description:
        "This cube will keep you busy the entire day and it is very fun to play with",
      price: 15.0,
      image:
        "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },

  ],
  cart: [],
  currentItem: null,
};

let lastId = 0;

const shopReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // // Great Item data from products array
      // const item = state.products.find(
      //   (product) => product.id === action.payload.id
      // );
      // // Check if Item is in cart already
      // const inCart = state.cart.find((item) =>
      //   item.id === action.payload.id ? true : false
      // );

      // return {
      //   ...state,
      //   cart: inCart
      //     ? state.cart.map((item) =>
      //         item.id === action.payload.id
      //           ? { ...item, qty: item.qty + 1 }
      //           : item
      //       )
      //     : [...state.cart, { ...item, qty: 1 }],
      // };

      return [
        ...state, {
          id: ++lastId,
          AnimalId: action.payload.AnimalId,
          price: action.payload.price,
        }
      ]

    // case LOAD_CURRENT_ITEM:
    //   return {
    //     ...state,
    //     currentItem: action.payload,
    //   };
    default:
      return state;
  }
};

export default shopReducer;
