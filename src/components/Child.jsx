import React from "react";

export default function Child({ num, handler }) {
  return (
    <div>
      <p>Child Component {num}</p>
      <button onClick={() => handler(num)}>Option {num}</button>
    </div>
  );
}
