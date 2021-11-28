import React from "react";
import Wishmessage from "./components/wish/Wishmessage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { store } from "./redux/Store";
import { Provider } from "react-redux";

let App = () => {
  return (
    <React.Fragment>
      <nav className="nav navbar-dark bg-dark">
        <a href="/">React Redux Rxample</a>
      </nav>
      <Provider store={store}>
        <Wishmessage />
      </Provider>
    </React.Fragment>
  );
};
export default App;
