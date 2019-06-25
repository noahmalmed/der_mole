import React, { useState, useEffect } from "react";
import Main from "./Main";
import Admin from "./Admin";
import red_smear from "./images/red_smear.png";
import green_smear from "./images/green_smear.png";
import "./App.css";

const App = () => {
  const [contestants, setContestants] = useState([]);
  const [overlaySource, setOverlaySource] = useState();
  const [adminIsShowing, setAdminIsShowing] = useState(false);

  const closeImage = () => {
    setOverlaySource(null);
  };

  useEffect(() => {
    if (overlaySource) {
      document.addEventListener("keydown", closeImage, false);
    } else {
      document.removeEventListener("keydown", closeImage, false);
    }
  }, [overlaySource]);

  if (overlaySource) {
    return <img src={overlaySource} className="feedback-image" alt="" />;
  }
  return (
    <div className="container">
      <div className="header">
        <div className="hidden">{contestants}</div>
        <button
          className="hidden"
          type="button"
          onClick={() => setAdminIsShowing(!adminIsShowing)}
        >
          Edit Contestant
        </button>
      </div>
      {adminIsShowing ? (
        <Admin
          onContestantEntered={contestantNames => {
            setContestants(contestantNames);
            setAdminIsShowing(false);
          }}
        />
      ) : (
          <Main
            onSubmit={isOut => {
              setOverlaySource(isOut ? red_smear : green_smear);
            }}
            contestants={contestants}
          />
        )}
    </div>
  );
};

export default App;
