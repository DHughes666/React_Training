import React, {useState} from "react";

function App() {

  const [fullName, setFullName] = useState({
      fName: "",
      lName: "",
  });
 

  function handleChange(event){
    const newValue = event.target.value;
    const inputName = event.target.name;
    
    setFullName(prevValue => {
      if (inputName === 'fName'){
        return {
          fName: newValue,
          lName: prevValue.lName
        }
      } else {
        return {
          lName: newValue,
          fName: prevValue.fName
        }
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName} </h1>
      <form>
        <input 
        onChange={handleChange} 
        name="fName" placeholder="First Name" value={fullName.fName}
        />
        <input 
        onChange={handleChange} 
        name="lName" placeholder="Last Name" value={fullName.lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
