import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/container/App";

// 리덕스 관련
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";

import * as serviceWorker from "./serviceWorker";

//store 생성 reducer 전달
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    {/* // Provider는 리액트 어플에 손쉽게 스토어를 연동할 수 있도록 도와줌 */}
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
