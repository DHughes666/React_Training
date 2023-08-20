import React from "react";
import { createRoot } from "react-dom/client";
import emojipedia from "./emojipedia";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<h1>Hi</h1>);

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.



const newMeanings = emojipedia.map(function(item){
  return item.meaning.substring(0, 100)
})

console.log(newMeanings);