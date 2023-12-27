import { Provider } from "react-redux";
import DrumContainer from "./container/DrumpageContainer";
import store from "./redux/store";
 
function App() {
  return (
    <Provider store={store}>
         <DrumContainer/>
    </Provider>
   

  );
}

export default App;
