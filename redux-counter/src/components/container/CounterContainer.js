import Counter from "../presenter/Counter";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

export const getRandomColor = () => {
  const colors = ["blue", "black", "red", "ivory", "purple"];

  const random = Math.floor(Math.random() * 5);

  return colors[random];
};

// store의 state 값을 props로 반환
const mapStateToProps = state => ({
  color: state.colorData.color,
  number: state.numberData.number
});

// dispatch 함수를 props로 반환
const mapDispatchToProps = dispatch => ({
  onIncrement: () => {
    return dispatch(actions.increment());
  },
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = getRandomColor();
    dispatch(actions.setColor(color));
  }
});

// 컴포넌트를 리덕스를 이용한 데이터 영역과 묶어버림(구독)
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
