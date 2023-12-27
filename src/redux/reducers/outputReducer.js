import { OUTPUT } from "../actions/actionTypes";


const defaultState={
    data:''
}
const outPutReducer=(state=defaultState,action)=>{
    switch(action.type){
        case OUTPUT:
            return {
                ...defaultState,data:action.payload
            }
            default:
                return state
    }
}
export default outPutReducer;