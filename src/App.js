import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [speed, setSpeed] = useState(500);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (status === true) {
      setSpeed(500);
    } else {
      setSpeed(0);
    }
  }, [status]);

  let circleStyles = {
    animation: `circleAnimation ${speed}ms linear infinite`,
  };

  let controlStyles = {
    borderRadius: "30px",
    padding: "10px",
    backgroundColor: status ? "blue" : "white",
    color: status ? "white" : "black",
  };

  return (
    <div className="App">
      <div className="circle" style={circleStyles}>
        <h1>around</h1>
      </div>

      <input
        type="range"
        min="0"
        max="2000"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
        className="slider"
      />

      <div className="playButton" style={controlStyles}>
        <h4 onClick={() => setStatus(!status)}>{status ? "STOP" : "PLAY"}</h4>
      </div>
    </div>
  );
}

export default App;
