import React, { useState } from "react";

const Admin = ({ onContestantEntered, initialValue }) => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const onKeyPress = e => {
    if (e.which === 13) {
      onContestantEntered([inputValue1, inputValue2]);
    }
  };

  return (
    <div className="body">
      <h3> Enter losing contestants </h3>
      <input
        value={inputValue1}
        onChange={e => setInputValue1(e.target.value)}
        className="mole-input"
        onKeyPress={onKeyPress}
      />
      <input
        value={inputValue2}
        onChange={e => setInputValue2(e.target.value)}
        className="mole-input"
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default Admin;
