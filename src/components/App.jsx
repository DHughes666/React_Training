import React from "react";
import Emoticon from "./Emoticon.jsx";
import emojipedia from "../emojipedia";

function createEmo(emo) {
    return (
        <Emoticon 
            key = {emo.id}
            emoji = {emo.emoji}
            name = {emo.name}
            meaning = {emo.meaning}
        />
    )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEmo)}
      </dl>
    </div>
  );
}

export default App;
