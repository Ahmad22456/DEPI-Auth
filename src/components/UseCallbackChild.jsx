import React, { memo } from "react";

function Child({ onChange }) {
  console.log("Rendering search");

  return (
    <input
      type="text"
      className="form-control mb-2"
      placeholder="Searching..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default memo(Child);
