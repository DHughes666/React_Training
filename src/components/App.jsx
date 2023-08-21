import React from "react";
import Hi from "./Header";
import Login from "./Form";

let isLoggedIn = false;

// function renderConditionally(){
//   if (isLoggedIn) {
//     return <Hi />
//   } else {
//     return <Login />
//   }
// }

let currTime = new Date().getHours();
console.log(currTime);

function App() {
  return (
    <div className="container">
      {/* {isLoggedIn ? <Hi /> : <Login />} */}
      {currTime > 13? <h1>Why are you still working</h1>:
      <h1>Keep Working</h1>}
    </div>
  );
}

export default App;
