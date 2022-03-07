interface initialState{
    user:any,
    orders: {},
    cardDetails:any
}





const appInitialstate:initialState = {
    user: null,
    orders: {},
    cardDetails:null
}
function appReducer(state = appInitialstate, action: any) {
    // console.log("from Reducer::::::",action);
    // console.log("action.deliveryDetails",action.deliveryDetails,state.deliveries,state.users);
     
    switch (action.type) {
        // case 'ADD':
        //     return{...state,counter:state.counter+1}
        // case 'SUBTRACT':
        //     return{...state,counter:state.counter-1}
        // default:
        //     return stateorders{orderid:"",products:{},deliveries:{}}
        case 'logout':{
            return {...state, user: null};
        }
        case 'setUser':
            return {...state, user: action.payload};
        case 'store_productdetails':
            return {...state,orders:{productdetails:action.productDetails}}
        case 'store_order':
            return { ...state, orders: {...state.orders,deliverydetails:action.deliveryDetails}}
        case "storeCardDetails":
            return ({ ...state, cardDetails: action.payload})
        default:
            return state;
    }
}
export default appReducer;