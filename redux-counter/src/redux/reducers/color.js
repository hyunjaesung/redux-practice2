import * as types from "../actions/ActionTypes";

const initState = {
  color: "black"
};

const colorReducer = (state = initState, action) => {
  // action은 actions/index.js 에서 정의되어있음
  switch (action.type) {
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color // color 가지도록 정의되어있음
      };

    default:
      return state;
  }
};

export default colorReducer;
