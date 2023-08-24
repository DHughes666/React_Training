import React, { useState } from "react";
import TodoItem from "./TodoItem.jsx";
import InputArea from "./InputArea.jsx";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        addItem = {addItem}
 
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              Text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
