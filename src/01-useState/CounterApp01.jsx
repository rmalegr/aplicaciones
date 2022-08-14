import React, { useState } from 'react';

export const CounterApp01 = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;
  return (
    <>
      <h3>Counter: {counter1}</h3>
      <h3>Counter: {counter2}</h3>
      <h3>Counter: {counter3}</h3>
      <hr />

      <button
        className="btn"
        onClick={() =>
          setCounter({
            //Este objeto esta seteando el nuevo valor
            ...state,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
