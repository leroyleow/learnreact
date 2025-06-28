import { useState, useEffect } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Counter : ${count}`;

    return () => {
      document.title = `Default Title`;
    };
  }, [count]);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold">Basic useEffect Example</h2>
      <p className="text-lg">Current Count: {count}</p>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        aria-label="Increment counter"
      >
        Increment
      </button>
    </div>
  );
};



export { CounterComponent, TestComponent };
