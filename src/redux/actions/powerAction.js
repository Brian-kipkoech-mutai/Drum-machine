
import { POWER } from "./actionTypes";

const powerAction=(Boolean)=>{
    return{
        type:POWER,
        payload:Boolean
    }
}

export default powerAction;