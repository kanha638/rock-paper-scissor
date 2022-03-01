const computerchoice = document.getElementById("cc");
const userchoice = document.getElementById("uc");
const result = document.getElementById("result");

const choices = document.querySelectorAll(".choice");
let uchoice;
let cchoice;
choices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    uchoice = e.target.id;
    userchoice.innerHTML = uchoice;
    getcomputerchoice();
    if (cchoice === uchoice) {
      result.innerHTML = "ITS A DRAW !!";
    } else if (
      (cchoice === "Rock" && uchoice === "Paper") ||
      (cchoice === "Paper" && uchoice === "Scissor") ||
      (cchoice === "Scissor" && uchoice === "Rock")
    ) {
      result.innerHTML = "YOU WON";
    } else {
      result.innerHTML = "YOU LOST";
    }
  })
);

function getcomputerchoice() {
  let a;

  a = Math.random() * 3;
  a = Math.floor(a) + 1;

  if (a === 1) {
    cchoice = "Rock";
  } else if (a === 2) {
    cchoice = "Paper";
  } else {
    cchoice = "Scissor";
  }

  computerchoice.innerHTML = cchoice;
}
