import React from "react";
import cars from "../practice";


const [honda, tesla] = cars

// const {model, coloursByPopularity, speedStats} = honda 
// const {topSpeed: hondaTopSpeed, zeroToSixty} = speedStats

const {models, coloursByPopularity, 
  speedStats: {topSpeed: hondaTopSpeed}} = honda

  const [hondaTopColour, hondaColour] = coloursByPopularity


console.log(honda);
console.log(hondaTopColour);
console.log(hondaTopSpeed);

console.log("---------------------------------------");

const {model: modelT, coloursByPopularity: Tcol, speedStats: Tsped} = tesla
const {topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty} = Tsped
const [teslaTopColour, teslaColour] = Tcol

console.log(hondaTopSpeed);
console.log(tesla);



function App() {

  return (
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
  )

 
}

export default App;
