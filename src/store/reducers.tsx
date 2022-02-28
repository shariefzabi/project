import * as actionType from './actions';
const initialState = {
    counter:0
}

const reducer =(state=initialState,action:any)=>{
    switch(action.type){
        case actionType.ADD:
            return{...state,counter:state.counter+1}
            case actionType.SUBTRACT:
                return{...state,counter:state.counter-1}
            default:
                return state
    }
}
export default reducer;