import { useState } from "react";
import useSound from "use-sound";
import DrawSound from "./assets/matchdraw.mp3";
import LoseSound from "./assets/oh-no-113125.mp3";
import WinSound from "./assets/WinSoundEffect.mp3";
import clickSound from "./assets/punchy-taps-ui-9-183908.mp3";
import { genrateRPS } from "./game-logic";

export default function useRockPaperScissor() {
  const [result, setResult] = useState("Let Start...");
  const [user, setUser] = useState("");
  const [computer, setComputer] = useState("");
  const [disabled, setDisabled] = useState(false);

  const [clickFeedback] = useSound(clickSound);
  const [playDrawMusic] = useSound(DrawSound);
  const [playLoseMusic] = useSound(LoseSound);
  const [playWinMusic] = useSound(WinSound);

  function rpsClickHandler(rpsValue) {
    if (disabled) return;
    setDisabled(true);
    clickFeedback();
    const randomRps = genrateRPS();
    setUser(rpsValue);
    setComputer(randomRps);
    if (randomRps == rpsValue) {
      setResult("Match Draw!!");
      setTimeout(() => {
        playDrawMusic();
        setTimeout(() => setDisabled(false), 2000);
      }, 1000);
    } else if (
      (rpsValue == "rock" && randomRps == "sicssor") ||
      (rpsValue == "paper" && randomRps == "rock") ||
      (rpsValue == "sicssor" && randomRps == "paper")
    ) {
      setResult("Congrats You Won!! 🎉");
      setTimeout(() => {
        playWinMusic();
        setTimeout(() => setDisabled(false), 3000);
      }, 1000);
    } else {
      setResult("Opps!!, Hard luck, Try Again 😥");
      setTimeout(() => {
        playLoseMusic();
        setTimeout(() => setDisabled(false), 2000);
      }, 1000);
    }
  }

  return {
    rpsClickHandler,
    user,
    computer,
    result,
  };
}
