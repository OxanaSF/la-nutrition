import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

import styled from 'styled-components';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <CounterStyled>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </CounterStyled>
  );
};

const CounterStyled = styled.section`
    font-size: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input,
  button {
    font: inherit;
    padding: 0.5rem;
  }
`;

export default Counter;
