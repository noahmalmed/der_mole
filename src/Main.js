import React, { useState } from "react";
import "./App.css";

const Main = ({ contestant, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const onKeyPress = e => {
    if (e.which === 13 && contestant) {
      onSubmit(inputValue.toLowerCase() === contestant.toLowerCase());
    }
  };

  return (
    <div className="body">
      <input
        autofocus="true"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className="mole-input"
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default Main;
