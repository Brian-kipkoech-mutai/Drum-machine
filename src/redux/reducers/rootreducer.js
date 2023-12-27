import { combineReducers } from "redux";
import powerReducer from "./powerReducer";
import outPutReducer from "./outputReducer";
import instrumentReducer from "./instrumentReducer";



const rootReducers=combineReducers(
    {
     powerReducer:powerReducer,
     outPutReducer: outPutReducer,
     instrumentReducer:instrumentReducer
     
    }
)

export default rootReducers;
