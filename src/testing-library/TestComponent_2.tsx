import { useState } from "react";

const TestComponent_2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <label
        htmlFor="counter"
      >
        OK
      </label>

      <span
        id="counter"
        role="counter1"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </span> */}

      <button role='counter'>Increase</button>
    </div>
  )
};

export default TestComponent_2;