import React, { useState } from "react";
import "./../styles/App.css";
import Child from "./Child";
const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  function clickHandler(num) {
    setSelectedOption(num);
  }
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <Child handler={clickHandler} num={1} />
      <Child handler={clickHandler} num={2} />
      <p> Selected Option: Option {selectedOption}</p>
      {/* Do not remove the main div */}
    </div>
  );
};

export default App;
