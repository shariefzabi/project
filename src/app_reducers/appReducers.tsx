const appInitialstate = {
    counter:0
}

const appReducer =(state=appInitialstate,action:any)=>{
    switch(action.type){
        case 'ADD':
            return{...state,counter:state.counter+1}
            case 'SUBTRACT':
                return{...state,counter:state.counter-1}
            default:
                return state
    }
}
export default appReducer;