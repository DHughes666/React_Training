import React from "react";
import Hi from "./Header";
import Formy from "./Form";

let isLoggedIn = false;

function renderConditionally(){
  if (isLoggedIn) {
    return <Hi />
  } else {
    return <Formy />
  }
}

function App() {
  return (
    <div className="container">
      {renderConditionally()}
    </div>
  );
}

export default App;
