import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);
  const onIncrementClick = () => {
    setCount((oldValue) => oldValue + 1);
  };

  const onDecrementClick = () => {
    setCount((oldValue) => oldValue - 1);
  };

  const clearCounterHandler = () => {
    setCount(0);
  };

  //   if (count < 0) {
  //     return <h3>Invalid count!</h3>;
  //   }

  return (
    <div>
      <h3>Counter</h3>

      {count < 0 ? <p>Invalid count!</p> : <p>Valid count!</p>}

      {count == 0 && <p>Please start incrementing</p>}

      <p>Count: {count}</p>

      <button onClick={onDecrementClick}>-</button>
      <button onClick={clearCounterHandler}>CLEAR</button>
      <button onClick={onIncrementClick}>+</button>
    </div>
  );
}
