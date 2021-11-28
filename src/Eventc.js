import React from "react";

function Eventc() {
  function testFun() {
    alert("test fun");
  }
  return (
    <div>
      <h1>Test function</h1>
      <button onClick={testFun}>Click Me</button>
    </div>
  );
}
export default Eventc;
