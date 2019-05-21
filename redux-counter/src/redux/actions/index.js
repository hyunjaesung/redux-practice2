import * as types from "./ActionTypes";

export const increment = () => {
  console.log("increment");
  return {
    type: types.INCREMENT
  };
};

export const decrement = () => ({
  type: types.DECREMENT
});

export const setColor = color => ({
  type: types.SET_COLOR,
  color
});
