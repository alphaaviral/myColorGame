let t = [document.getElementById("t1"), document.getElementById("t2"), document.getElementById("t3"), document.getElementById("t4"), document.getElementById("t5"), document.getElementById("t6")];
let x;
let correctColor;
let result = document.getElementById("result");
let counter = document.getElementById("counter");
let button = document.getElementById("refButton");
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function newGame() {
  counter.innerHTML = 0;
  for(i=0; i<6; i++){
      t[i].style.background = getRandomColor();
  }
  document.getElementById("header").style.background = "pink";

  x = Math.floor(Math.random() * 6 + 1);

  correctColor = t[x-1].style.background;
  document.getElementById("header-clue").innerHTML = correctColor;
}

for(let i=0; i<6; i++){
t[i].addEventListener("click", function event() {
  if (t[i].style.background == correctColor) {
    for(let b=0; b<6; b++){
    t[b].style.background = correctColor;
    }
    document.getElementById("header").style.background = correctColor;
  } else {
    t[i].style.background = "black";
    counter.innerHTML++;
    t[i].removeEventListener("click", event1);
  }
})
}