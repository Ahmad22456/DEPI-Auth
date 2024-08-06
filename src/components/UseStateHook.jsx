import { useState } from "react";

export default function useStateHook() {
  const [state, setState] = useState("ahmed");
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h2>useState Hook</h2>
      <h4>Change state by input</h4>
      <input
        className="form-control"
        placeholder="Change the state..."
        onChange={(e) => setState(e.target.value)}
        value={state}
        type="text"
      />

      <h4 className="mt-4">your state is : {state}</h4>

      <hr className="hr" />

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
    </>
  );
}
