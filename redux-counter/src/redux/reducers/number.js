import * as types from "../actions/ActionTypes";

const initState = {
  number: 0
};

const numberReducer = (state = initState, action) => {
  // action은 actions/index.js 에서 정의되어있음
  switch (action.type) {
    case types.INCREMENT: // type은 actions/ActionTypes에 정의되어있음
      return {
        ...state,
        number: state.number + 1
      };

    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };

    default:
      return state;
  }
};

export default numberReducer;
