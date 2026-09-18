import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Counter Demonstration</h1>

      <h2>COUNT = {count}</h2>

      <button
        style={{
          background: "blue",
          color: "white",
          width: 120,
          margin: 5
        }}
        onClick={increase}
      >
        Increase
      </button>

      <button
        style={{
          background: "red",
          color: "white",
          width: 120,
          margin: 5
        }}
        onClick={decrease}
      >
        Decrease
      </button>

      <button
        style={{
          background: "green",
          color: "white",
          width: 120,
          margin: 5
        }}
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;