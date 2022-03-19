interface initialState {
  user: any;
  products: any[];

  orders: any[];
  cartProducts: any[];
  orderdetails: {};
  quantityarr:any[];
  // filters:any[]

  cardDetails: any;
  agent: any;
  Butchery: any;
  locName: any;
  productData: any;
  paymentType: any;

  quantity: any;
}

const appInitialstate: initialState = {
  user: null,
  products: [],

  cartProducts: [],
  orders: [],
  orderdetails: {},
  quantityarr: [],
  // filters:[],

  cardDetails: null,
  agent: null,
  Butchery: null,
  locName: null,
  productData: null,
  paymentType: null,

  quantity: [],
};
function appReducer(state = appInitialstate, action: any) {
  switch (action.type) {
    case "logout": {
      return { ...state, user: null };
    }
    case "setUser":
      return { ...state, user: action.payload };
    case "setAgent":
      return { ...state, agent: action.payload };
    case "setButchery":
      return { ...state, agent: action.payload };

    case "store_products":
      return { ...state, products: [...state.products, action.productDetails] };


    case "addToCart":
      return {...state,cartProducts: [...state.cartProducts, action.products]};
    // case "storeFilterdetails":
    //   return { ...state, filters: [...state.filters, action.filters] };
    case "addQuantity":
      return {...state,quantityarr: [...state.quantityarr, action.payload]};
    case "store_productdetails":
      return { ...state, orders: [...state.orders, ...action.productDetails] };
    case "store_order":
      return { ...state, orderdetails: action.payload };

    case "storeCardDetails":
      return { ...state, cardDetails: action.payload };
    case "storePaymentType":
      return { ...state, paymentType: action.payload };

    case "storeLocname":
      return { ...state, locName: action.payload };
    case "setCurrentBlog":
      return { ...state, currentBlog: action.payload };
    case "storeProductData":
      return { ...state, productData: action.payload };

    case "itemslength":
      return { ...state, quantity: action.payload };
    case "updateProductQuantity":
      return { ...state, quantity: action.payload };

    default:
      return state;
  }
}
export default appReducer;
