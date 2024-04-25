import React, { useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  const decrementCount = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Click Increment</button>
      <br />
      <br />
      <button onClick={decrementCount}>Click Decrement</button>
    </div>
  );
};

export default ClickCounter;
