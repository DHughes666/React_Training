import React, {useState} from "react";

function App() {

  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  function updateFName(event){
    setfName(event.target.value);
  }

  function updatedLName(event) {
    setlName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {fName} {lName} </h1>
      <form>
        <input 
        onChange={updateFName} 
        name="fName" placeholder="First Name" value={fName}
        />
        <input 
        onChange={updatedLName}
        name="lName" placeholder="Last Name" value={lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
