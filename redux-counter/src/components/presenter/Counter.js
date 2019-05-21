import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  user-select: none;
  cursor: pointer;
`;

//

const Counter = ({ number, color, onIncrement, onDecrement, onSetColor }) => {
  return (
    <Container
      onClick={onIncrement}
      onContextMenu={event => {
        event.preventDefault();
        onDecrement();
      }}
      onFocus={onSetColor}
      style={{ backgroundColor: color }}
    >
      {number}
    </Container>
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
