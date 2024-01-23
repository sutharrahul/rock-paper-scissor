export function genrateRPS() {
  const randomNumber = (Math.round(Math.random() * 10) % 3) + 1;
  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "sicssor";
    default:
      return "";
  }
}
