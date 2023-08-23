import React, { useState } from "react";

function App() {

  const [inputText, setInputText] = useState("")
  const [items, setItems] = useState([])
  
  function handleOnChange(event) {
    const newValue = event.target.value

    setInputText(newValue)
  }

  function handleOnClick(){
    
    setItems((prevItem) => {
      return [...prevItem, inputText]
    })
    setInputText("");
  }

  

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleOnChange} 
        type="text" value={inputText}/>
        <button onClick={handleOnClick}>
          <span >Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
