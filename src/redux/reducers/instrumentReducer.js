 import { GUITER } from "../actions/actionTypes";


 const defaultState={
    guiter:false
 }


 const instrumentReducer=(state=defaultState,action)=>{
    switch(action.type){

        case GUITER:
            return{
                ...defaultState,guiter:action.payload
            }
            default:
                return state
    }
 }

 export default instrumentReducer