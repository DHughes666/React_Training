import React, {useState} from "react";

function App() {

 let [count, setCount] = useState(0);

//  function increase(){
//   setCount(count + 1) ;
//  }

//  function decrease(){
//   setCount(count - 1);
//  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count -1)}>-</button>
    </div>
  );
}

export default App;
