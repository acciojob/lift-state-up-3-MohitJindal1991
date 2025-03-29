import React from "react";

export default function Child({num}){

  return (
    <div>
       <p>Child Component {num}</p>
      <button>Option {num}</button>
    </div>
  );
}
