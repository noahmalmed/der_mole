import React, { useState } from "react";
import "./App.css";

const Main = ({ contestants, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const onKeyPress = e => {
    if (e.which === 13 && contestants) {
      onSubmit(contestants.find(contestant => contestant.toLowerCase() === inputValue.toLowerCase()));
    }
  };

  return (
    <div className="body">
      <input
        autofocus
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className="mole-input"
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default Main;
