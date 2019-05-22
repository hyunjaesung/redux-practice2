import * as types from "../actions/ActionTypes";

import { combineReducers } from "redux";

import numberReducer from "./number";
import colorReducer from "./color";

// const initState = {
//   color: "black",
//   number: 0
// };

// const counter = (state = initState, action) => {
//   // action은 actions/index.js 에서 정의되어있음
//   switch (action.type) {
//     case types.INCREMENT: // type은 actions/ActionTypes에 정의되어있음
//       return {
//         ...state,
//         number: state.number + 1
//       };

//     case types.DECREMENT:
//       return {
//         ...state,
//         number: state.number - 1
//       };

//     case types.SET_COLOR:
//       return {
//         ...state,
//         color: action.color // color 가지도록 정의되어있음
//       };

//     default:
//       return state;
//   }
// };

// 루트 리듀서를 만들어줘야 한다
// 루트 리듀서의 오브젝트 구조 정의 필요
const reducers = combineReducers({
  numberData: numberReducer,
  colorData: colorReducer
});

export default reducers;
