import { OUTPUT } from "./actionTypes";

const outPutAction=(data)=>{
    return{
        type:OUTPUT,
        payload:data
    }
}
export default outPutAction;