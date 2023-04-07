const guess = document.getElementById("guess");
const girl = document.getElementById("girl");
const days = document.getElementById("days");
const juice = document.getElementById("juice");
const ice = document.getElementById("ice");
const choco = document.getElementById("choco");

let day = 1;
const dayInc = () => {
  day++;
  days.innerHTML = day;
};

let j = 0;
let c = 0;
let i = 0;

const g = () => {
  if (Math.max(i, j, c) == c) {
    guess.innerHTML = "Chocolate";
  } else if (Math.max(i, j, c) == i) {
    guess.innerHTML = "Icecream";
  } else {
    guess.innerHTML = "Juice";
  }

  // if (c == 1) {
  //   guess.innerHTML = "hey";
  // } else guess.innerHTML = "y";
};

const juiceClick = () => {
  dayInc();
  j++;
  g();
};
const iceClick = () => {
  dayInc();
  i++;
  g();
};
const chocoClick = () => {
  dayInc();
  c++;
  console.log(c);
  g();
  // guess.innerHTML = " heyasd";
};

juice.addEventListener("click", juiceClick);
ice.addEventListener("click", iceClick);
choco.addEventListener("click", chocoClick);
