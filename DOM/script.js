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

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});
select.addEventListener("input", (e) => {
  language = e.target.value;
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>${pseudo}</h3>
    <h4>Language ${language}</h4>
    `;
  } else {
    alert("Veuillez cocher cgv");
  }
});
//......................................
// Load event

window.addEventListener("load", () => {
  console.log("document chargé");
});

//.....................
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    box.classList.toggle("box-clicked");
    // e.target.style.background = "yellow";
    box.style.borderRadius = "50px";
  });
});

//-----------------------------
// addEventListener vs onclick

document.body.onclick = () => {
  console.log("click");
};

//..................................
// stop  propagation
// questionContainer.addEventListener("click", (e) => {
//   alert("test");
//   e.stopImmediatePropagation;
// });

// removeEventListener

//................................
// BOM

// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(window.scrollY);

// Evenement adossés a window
btn2.addEventListener("click", () => {
  confirm("voulez vous quitter ");
});

//prompt

btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom");
  questionContainer.innerHTML += `<h3>Bravo ${answer}</h3>`;
});

//.................................
//Time
// setTimeout(() => {
//   questionContainer.style.borderRadius = "300px";
// }, 3000);

// setInterval(() => {
//   document.body.innerHTML += "<div class ='box'><h2>salut</h2></div>";
// }, 4000);

// let interval = setInterval(() => {
//   document.body.innerHTML += "<div class ='box'><h2>salut</h2></div>";
// }, 4000);

// document.body.addEventListener("click", (e) => {
//   // e.target.remove();
//   clearInterval(interval);
// });

// Location

// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");

//setproperty

window.addEventListener("mousemove", (e) => {
  if (scrollY > 250) {
    nav.style.setProperty("--x", e.layerX + "px");
    nav.style.setProperty("--y", e.layerY + "px");
  } else {
    nav.style.oppacity = "0";
  }
});
