import React, { useState } from "react";

const Admin = ({ onContestantEntered, initialValue }) => {
  const [inputValue, setInputValue] = useState("");
  const onKeyPress = e => {
    if (e.which === 13) {
      onContestantEntered(inputValue);
    }
  };

  return (
    <div className="body">
      <h3> Enter losing contestant </h3>
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className="mole-input"
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default Admin;
