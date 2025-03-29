
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [selected,setSelected]=useState("");
  function clickHandler(num){
    setSelected(num);
  }
  return (
    <div>
      <h1>Parent Component</h1>
      <h3>Child Component</h3>
      <Child handler={clickHandler} num={1}/>
      <Child handler={clickHandler} num={2}/>
    <p> Selected Option: Option {selected}</p>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
