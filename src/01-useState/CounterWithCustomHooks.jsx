import React from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h3>Counter con CustomHooks: {counter}</h3>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-primary " onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={decrement}>
        {' '}
        -1
      </button>
    </>
  );
};
