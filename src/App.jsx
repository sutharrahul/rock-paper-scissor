import { useState } from "react";
import paperIcon from "./assets/paper.png";
import rockIcon from "./assets/rock.png";
import scissorIcon from "./assets/scissor.png";

import "./App.css";
import { genrateRPS } from "./game-logic";

function App() {
  const [result, setResult] = useState("Let Start...");

  function rpsClickHandler(rpsValue) {
    const randomRps = genrateRPS();
    console.log(rpsValue, randomRps);
    if (randomRps == rpsValue) {
      setResult("Match Draw!!");
    } else if (
      (rpsValue == "rock" && randomRps == "sicssor") ||
      (rpsValue == "paper" && randomRps == "rock") ||
      (rpsValue == "sicssor" && randomRps == "paper")
    ) {
      setResult("Congrats You Won!! 🎉");
    } else {
      setResult("Opps!!, Hard luck, Try Again 😥");
    }
  }

  return (
    <>
      <div>
        <a href="javascript:void(0)" onClick={() => rpsClickHandler("rock")}>
          <img src={rockIcon} className="logo react" alt="Rock" />
        </a>
        <a href="javascript:void(0)" onClick={() => rpsClickHandler("paper")}>
          <img src={paperIcon} className="logo react" alt="Paper" />
        </a>
        <a href="javascript:void(0)" onClick={() => rpsClickHandler("sicssor")}>
          <img src={scissorIcon} className="logo" alt="Sicssor" />
        </a>
      </div>
      <h2>{result}</h2>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <footer className="footer">
        Create with 💜by{" "}
        <a href="https://github.com/sutharrahul">@sutharrahul</a>,<br /> Visit
        my website{" "}
        <a href="https://sutharrahul.github.io">sutharrahul.github.io</a> to
        learn more
      </footer>
    </>
  );
}

export default App;
