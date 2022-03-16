interface initialState {
    user: any,
    products: any[],
    orders: any[],
    filters: [],
    deliveryDetails: {}


    cardDetails: any
    agent: any
    Butchery: any
    locName: any
    productData: any
    paymentType: any

    quantity: any
}

const appInitialstate: initialState = {
    user: null,
    products: [],
    filters: [],
    orders: [],
    deliveryDetails: {},
    cardDetails: null,
    agent: null,
    Butchery: null,
    locName: null,
    productData: null,
    paymentType: null,

    quantity: []
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
        case 'setButchery':
            return { ...state, agent: action.payload };

        case 'store_products':
            return { ...state, products: [...state.products, action.productDetails] };
        case 'storeFilterdetails':
            return { ...state, filters: [...state.filters, action.filters] }
        case 'store_productdetails':
            return { ...state, orders: [...state.orders, ...action.productDetails] }
            return { ...state, orders: [...state.orders, action.productDetails] }
        case 'store_order':
            return { ...state, deliveryDetails: action.payload }
        case "storeCardDetails":
            return ({ ...state, cardDetails: action.payload })
        case "storePaymentType":
            return ({ ...state, paymentType: action.payload })


        case "storeLocname":
            return ({ ...state, locName: action.payload })
        case 'setCurrentBlog':
            return { ...state, currentBlog: action.payload };
        case 'storeProductData':
            return { ...state, productData: action.payload };

        case 'itemslength':
            return { ...state, quantity: action.payload };
        default:
            return state;
    }
}
export default appReducer;