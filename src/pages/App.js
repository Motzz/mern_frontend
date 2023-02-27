import Routes from "../config/Routes/Route";
import { Store } from "../config/tampunganConfig";
import "./App.css";
import { Provider } from "react-redux"; //penyedia global dari

function App() {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
}

export default App;
