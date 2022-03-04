interface initialState{
    users:any[],
    products:any[],
    deliveries:any[],
    orders:[]
}

var appInitialstate:initialState = {
    users: [
        {
            "createPassword": "Hello@123",
            "email": "yadlaharish111@gmail.com",
            "username": "Harish"
        }
    ],
    products:[],
    deliveries:[],
    orders:[]
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
        //     return state
        case 'create_record':
            return {...state, users: [...state.users,action.userDetails] };
        case 'store_productdetails':
            return {...state,products:[...state.products, action.productDetails]}
        case 'create_order':
            return {...state,deliveries:[...state.deliveries,action.deliveryDetails]}
        default:
            return state;
    }
}
export default appReducer;