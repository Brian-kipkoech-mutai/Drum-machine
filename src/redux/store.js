import { legacy_createStore } from "redux";
import rootReducers from "./reducers/rootreducer";





const store=legacy_createStore(rootReducers)


export default store