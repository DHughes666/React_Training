import React, {useState} from "react";

function App() {

  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleChange(event){
    setName(event.target.value);
  }

  function handleClick(event){
    setHeadingText(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <input 
      onChange={handleChange} 
      type="text" placeholder="What's your name?"
      value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

// In HTML, form elements such as <input>, <textarea>, and <select> 
// typically maintain their own state and update it based on user input. 
// In React, mutable state is typically kept in the state property of 
// components, and only updated with setState().

export default App;
