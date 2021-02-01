var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
var t4 = document.getElementById("t4");
var t5 = document.getElementById("t5");
var t6 = document.getElementById("t6");
var x;
var correctColor;
var result = document.getElementById("result");
var counter = document.getElementById("counter");
var button = document.getElementById("refButton");
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function newGame() {
  counter.innerHTML = 0;
  t1.style.background = getRandomColor();
  t2.style.background = getRandomColor();
  t3.style.background = getRandomColor();
  t4.style.background = getRandomColor();
  t5.style.background = getRandomColor();
  t6.style.background = getRandomColor();
  document.getElementById("header").style.background = "pink";

  x = Math.floor(Math.random() * 6 + 1);

  if (x==1) correctColor= t1.style.background;
  if (x==2) correctColor= t2.style.background;
  if (x==3) correctColor= t3.style.background;
  if (x==4) correctColor= t4.style.background;
  if (x==5) correctColor= t5.style.background;
  if (x==6) correctColor= t6.style.background;
  console.log(x);
  console.log(correctColor);

  document.getElementById("header-clue").innerHTML = correctColor;
}

t1.addEventListener("click", function event1() {
  if (t1.style.background == correctColor) {
    t2.style.background = correctColor;
    t3.style.background = correctColor;
    t4.style.background = correctColor;
    t5.style.background = correctColor;
    t6.style.background = correctColor;
    document.getElementById("header").style.background = correctColor;
  } else {
    t1.style.background = "black";
    counter.innerHTML++;
    t1.removeEventListener("click", event1);
  }
});

t2.addEventListener("click", function event2() {
  if (t2.style.background == correctColor) {
    t1.style.background = correctColor;
    t3.style.background = correctColor;
    t4.style.background = correctColor;
    t5.style.background = correctColor;
    t6.style.background = correctColor;
    document.getElementById("header").style.background = correctColor;
  } else {
    t2.style.background = "black";
    counter.innerHTML++;
    t2.removeEventListener("click", event2);
  }
});

t3.addEventListener("click", function event3() {
  if (t3.style.background == correctColor) {
    t2.style.background = correctColor;
    t1.style.background = correctColor;
    t4.style.background = correctColor;
    t5.style.background = correctColor;
    t6.style.background = correctColor;
    document.getElementById("header").style.background = correctColor;
  } else {
    t3.style.background = "black";
    counter.innerHTML++;
    t3.removeEventListener("click", event3);
  }
});

t4.addEventListener("click", function event4() {
  if (t4.style.background == correctColor) {
    t2.style.background = correctColor;
    t3.style.background = correctColor;
    t1.style.background = correctColor;
    t5.style.background = correctColor;
    t6.style.background = correctColor;
    document.getElementById("header").style.background = correctColor;
  } else {
    t4.style.background = "black";
    counter.innerHTML++;
    t4.removeEventListener("click", event4);
  }
});

t5.addEventListener("click", function event5() {
  if (t5.style.background == correctColor) {
    t2.style.background = correctColor;
    t3.style.background = correctColor;
    t4.style.background = correctColor;
    t1.style.background = correctColor;
    t6.style.background = correctColor;
    document.getElementById("header").style.background = correctColor;
  } else {
    t5.style.background = "black";
    counter.innerHTML++;
    t5.removeEventListener("click", event5);
  }
});

t6.addEventListener("click", function event6() {
  if (t6.style.background == correctColor) {
    t2.style.background = correctColor;
    t3.style.background = correctColor;
    t4.style.background = correctColor;
    t5.style.background = correctColor;
    t1.style.background = correctColor;
    document.getElementById("header").style.background = correctColor;
  } else {
    t6.style.background = "black";
    counter.innerHTML++;
    t6.removeEventListener("click", event6);
  }
});