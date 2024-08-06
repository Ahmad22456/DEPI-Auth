import React, { useRef } from "react";

function FocusInput() {
  // Create a ref using useRef hook
  const inputRef = useRef(null);
  const refValue = useRef(1);

  // Function to focus the input field
  const focusInput = () => {
    // Access the current property of the ref
    if (inputRef.current) {
      inputRef.current.focus();
      console.log(inputRef.current.value);
    }
  };

  const increaseRefValue = () => {
    refValue.current++;
    console.log(refValue.current);
  };

  return (
    <div>
      <h2>useRef Hook</h2>
      <input
        className="form-control"
        type="text"
        ref={inputRef} // Attach the ref to the input element
        placeholder="Click the button to focus me"
      />
      <button className="btn btn-primary mt-2" onClick={focusInput}>
        Focus Input
      </button>

      <button className="btn btn-primary mt-2 ms-2" onClick={increaseRefValue}>
        Increase ref Value by 1 (Look at the console)
      </button>
    </div>
  );
}

export default FocusInput;
