const questionContainer = document.querySelector(".click-event");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.style.background = "green";
  response.style.padding = "15px 0";
  response.classList.toggle("show-response");
});
btn2.addEventListener("click", () => {
  response.style.background = "red";
  response.classList.toggle("show-response");
});

//...............................................................................................//
// MouseEvents
const mouseMove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mouseMove.style.left = e.pageX + "px";
  mouseMove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
  mouseMove.style.transition = "0.2s ease";
});
window.addEventListener("mouseup", () => {
  mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(155,58,255,0.9)";
  btn1.style.borderRadius = "50px";
  btn1.style.border = "none";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "cyan";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//.......................
// keyPress event

const keypressContainer = document.querySelector(".keydown");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

document.addEventListener("keydown", (e) => {
  key.textContent = e.key;
  if (e.key === "r") {
    keypressContainer.style.background = "green";
  } else if (e.key === "o") {
    keypressContainer.style.background = "pink";
  } else {
    keypressContainer.style.background = "blue";
  }
  ring(e.key);
});

//.........................
// scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (scrollY > 200) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-50px";
  }
});

//...............................
// Form Event

const inputName = document.querySelector("input[type='text']");

inputName.addEventListener("input", (e) => {});
