import Router from "./Router";
import { Provider } from "react-redux";
import store from "./redux/app/store";

function App() {
  return (
    <Provider store={store}>
      <div id="app">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
