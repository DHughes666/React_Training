import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

var numbers = [3, 56, 2, 48, 5];
console.log(numbers);

////Map -Create a new array by doing something with each item in an array.
const mapNumbers = numbers.map(x => x * 2);
console.log(mapNumbers);

//////Filter - Create a new array by keeping the items that return true.
const filterNumbers = numbers.filter(x => x < 10);
console.log(filterNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
var reduceNumber = numbers.reduce((
  accumulator, currentNumber) => accumulator + currentNumber);
console.log(reduceNumber);

////Find - find the first item that matches from an array.
const findNumber = numbers.find(num => num > 10);
console.log(findNumber);

////FindIndex - find the index of the first item that matches.
const findIndexNumber = numbers.findIndex(num => num > 10);
console.log(findIndexNumber);


