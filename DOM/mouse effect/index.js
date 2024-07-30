// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");

window.addEventListener("mousemove", (e) => {
  circle1.style.top = e.pageY + "px";
  circle1.style.left = e.pageX + "px";

  circle2.style.top = e.y + "px";
  circle2.style.left = e.x + "px";

  circle3.style.top = e.pageY + "px";
  circle3.style.left = e.pageX + "px";
});

// const mouses = document.querySelectorAll(".mouse");

// window.addEventListener("mousemove", (e) => {
//   mouses.forEach((mouse) => {
//     mouse.style.top = e.y + "px";
//     mouse.style.left = e.x + "px";
//   });
// });
