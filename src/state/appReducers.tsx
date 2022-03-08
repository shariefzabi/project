interface initialState {
    user: any,
    products: any[],
    orders: {},
    cardDetails: any
    agent: any,
    toggleflag: any
}

const appInitialstate: initialState = {
    user: null,
    products: [],
    orders: {},
    cardDetails: null,
    agent: null,
    toggleflag: true
}
function appReducer(state = appInitialstate, action: any) {
    switch (action.type) {
        case 'logout': {
            return { ...state, user: null };
        }
        case 'setUser':
            return { ...state, user: action.payload };
        case 'setAgent':
            return { ...state, agent: action.payload };
        case 'store_products':
            return { ...state, products: [...state.products, action.productDetails] };
        case 'store_productdetails':
            return { ...state, orders: { productdetails: action.productDetails } }
        case 'store_order':
            return { ...state, orders: { ...state.orders, deliverydetails: action.deliveryDetails } }
        case "storeCardDetails":
            return ({ ...state, cardDetails: action.payload })
        case "toggle_flag":
            return ({ ...state, toggleflag: action.payload })
        default:
            return state;
    }
}
export default appReducer;