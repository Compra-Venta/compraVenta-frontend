import logo from './logo.svg';
import './App.css';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from "./redux/configureStore";
import { Provider } from 'react-redux';
require("dotenv").config();
const Store = ConfigureStore()
function App() {
  return (
    <Provider store={Store}>
    <BrowserRouter>
    <div>
      <MainComponent/>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
