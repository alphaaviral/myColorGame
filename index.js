let t = [document.getElementById("t1"), document.getElementById("t2"), document.getElementById("t3"), document.getElementById("t4"), document.getElementById("t5"), document.getElementById("t6")];
let x;
let correctColor;
let result = document.getElementById("result");
let counter = document.getElementById("counter");
let button = document.getElementById("refButton");
let y;
let z;
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function newGame() {
  y = 0;
  counter.innerHTML = "Incorrect Guesses : " + y;
  for(i=0; i<6; i++){
      t[i].style.background = getRandomColor();
  }

  z = Math.floor(Math.random() * 6 + 1);

  correctColor = t[z-1].style.background;
  document.getElementById("header-clue").innerHTML = "Your color code is... " + correctColor;
}

for(let i=0; i<6; i++){
t[i].addEventListener("click", function clickAction() {
  if (t[i].style.background == correctColor) {
    for(let b=0; b<6; b++){
    t[b].style.background = correctColor;
    }
  } else {
    t[i].style.background = getRandomColor();
    y++
    counter.innerHTML = "Incorrect Guesses : " + y;
    x = Math.floor(Math.random() * 6 + 1);
    correctColor = t[x-1].style.background;
    document.getElementById("header-clue").innerHTML = "Your color code is... " + correctColor;
  }
});
}
