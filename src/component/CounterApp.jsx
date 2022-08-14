import React, { useState } from 'react';

import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  // function handleAdd() {
  console.log({ counter });
  //   value = 1000;
  // }

  const handleAdd = () => {
    //console.log(1)
    setCounter((c) => c + 1);
  };
  const handleResta = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);
  return (
    <>
      <h1>CounterApp</h1>
      <p> {counter}</p>
      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleResta}> -1 </button>
      <button onClick={handleReset}>resetear</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
