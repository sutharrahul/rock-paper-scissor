import Icon from "./Icon";
import "./App.css";
import useRockPaperScissor from "./useRockPaperScissor";

function App() {
  const { rpsClickHandler, user, computer, result } = useRockPaperScissor();

  return (
    <div>
      {user && computer && (
        <div className="results">
          <span className="user">You</span>
          <Icon icon={user} />
          <span className="vs">vs</span>
          <Icon icon={computer} />
          <span className="computer">Computer</span>
        </div>
      )}
      <h2>{result}</h2>
      <div>
        <Icon icon={"rock"} onClick={() => rpsClickHandler("rock")} />
        <Icon icon={"paper"} onClick={() => rpsClickHandler("paper")} />
        <Icon icon={"sicssor"} onClick={() => rpsClickHandler("sicssor")} />
      </div>
      <footer className="footer">
        Create with 💜by{" "}
        <a href="https://github.com/sutharrahul">@sutharrahul</a>,<br /> Visit
        my website{" "}
        <a href="https://sutharrahul.github.io">sutharrahul.github.io</a> to
        learn more
      </footer>
    </div>
  );
}

export default App;
