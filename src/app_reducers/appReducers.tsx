interface initialState{
    counter:any[],
    users:any[]
}
var appInitialstate:initialState = {
    counter:[],
    users: [
        {
            "createPassword": "Hello@123",
            "email": "yadlaharish111@gmail.com",
            "username": "Harish"
        }
    ]
}
function appReducer(state = appInitialstate, action: any) {
    console.log("from Reducer::::::",action);
    // console.log(state);


    switch (action.type) {
        // case 'ADD':
        //     return{...state,counter:state.counter+1}
        // case 'SUBTRACT':
        //     return{...state,counter:state.counter-1}
        // default:
        //     return state
        case 'create_record':
            return {users: [...state.users,action.userDetails] };
        default:
            return state;
    }
}
export default appReducer;