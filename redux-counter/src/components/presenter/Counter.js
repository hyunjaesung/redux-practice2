import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const Ball = styled.div`
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  border-radius: 100%;
  cursor: pointer;
  margin: 20px;
`;

const Counter = ({ number, color, onIncrement, onDecrement, onSetColor }) => {
  return (
    <Ball
      onClick={onIncrement}
      onContextMenu={event => {
        event.preventDefault();
        onDecrement();
      }}
      onDoubleClick={onSetColor}
      style={{ backgroundColor: color }}
    >
      {number}
    </Ball>
  );
};

Counter.propTypes = {
  number: propTypes.number,
  color: propTypes.string,
  onIncrement: propTypes.func,
  onDecrement: propTypes.func,
  onSetColor: propTypes.func
};

Counter.defaultProps = {
  number: 0,
  color: "black",
  onIncrement: () => {},
  onDecrement: () => {},
  onSetColor: () => {}
};

export default Counter;
