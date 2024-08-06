import React, { useState, useMemo } from "react";

const items = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);

function FilteredList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [counter, setCounter] = useState(0);

  // useMemo to memoize the filtered items based on searchTerm
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]); // Recompute only when searchTerm changes

  // const memo = useMemo(() => {} , [])

  // const filteredItems = items.filter((item) => {
  //   console.log("Filtering items...");
  //   return item.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  return (
    <div className="container mt-4">
      <h2>useMemo Hook</h2>
      <div className="row">
        <div className="col-12">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <ul className="list-group">
            {filteredItems.map((item) => (
              <li key={item} className="list-group-item">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-12">
          <h4>Counter is {counter}</h4>
          <button
            onClick={() => setCounter((prev) => prev + 1)}
            className="btn btn-primary"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilteredList;
