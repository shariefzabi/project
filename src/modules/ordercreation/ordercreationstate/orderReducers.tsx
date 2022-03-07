interface initialState{
    products:any[],
    deliveries:any[],
    orders: any[],
}
const orderInitialstate:initialState = {
    products:[],
    deliveries:[],
    orders: [],
}
function orderReducer(state = orderInitialstate, action: any) {
    console.log("from Reducer::::::",action);
    // console.log("action.deliveryDetails",action.deliveryDetails,state.deliveries,state.users);
     
    switch (action.type) {
        case 'store_productdetails':
            return {...state,products:[...state.products, action.productDetails]}
        case 'create_order':
            return { ...state, deliveries: [...state.deliveries, action.deliveryDetails] }
        default:
            return state;
    }
}
export default orderReducer;