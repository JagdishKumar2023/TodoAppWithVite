import React, { useState } from "react";

const MouseOver = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      {count}
      <br />
      <br />
      <br />
      <button onMouseOver={incrementCount}>onMouseOver</button>
    </div>
  );
};

export default MouseOver;
