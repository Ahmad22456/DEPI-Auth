import { useEffect, useState } from "react";

export default function useEffectHook() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    // rules
    if (counter > 5) {
      console.log("counter can't be greater than 5");
    }
    console.log(`Counter has changed to ${counter}`);
  }, [counter]);
  return (
    <>
      <h2>useEffect Hook</h2>
      <h4>Simple Counter app</h4>

      <h4>{counter}</h4>

      <div className="d-flex">
        <button
          onClick={() => setCounter((prev) => prev + 1)}
          className="btn btn-primary me-2"
        >
          +
        </button>
        <button
          onClick={() => setCounter((prev) => prev - 1)}
          className="btn btn-primary"
        >
          -
        </button>
      </div>

      <h4 className="mt-4">
        Every time you change the state there will be a trigger using useLayout
        hook (look at the console)
      </h4>
    </>
  );
}
