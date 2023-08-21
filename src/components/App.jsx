import React, {useState} from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello")
  let [colori, setColori] = useState("white")
  
  function handleClick(){
    setHeadingText("Submitted")
  }

  function mouseOn(){
    setColori("black")
  }

  function mouseOut(){
    setColori("white")
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: colori }}
      onClick={handleClick} >Submit</button>
    </div>
  );
}

export default App;
