import { POWER } from "../actions/actionTypes";

const defaultState={
    power:true,
}

const powerReducer=( state=defaultState,action)=>{
    switch(action.type){
        case POWER:
            return{
                ...defaultState,power:action.payload
            }
        default :
        return state
    }
}

 export default powerReducer