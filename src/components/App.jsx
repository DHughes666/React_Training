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

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <Hi /> : <Login />}
    </div>
  );
}

export default App;
