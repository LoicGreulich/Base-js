// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

let scroll;
window.addEventListener("scroll", () => {
  if (scrollY < scroll) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-60px";
  }
  // navbar.style.background = "pink";

  scroll = window.scrollY;
});

// let scroll = 0

// window.addEventListener("scroll", () =>{
// (window.scrollY < scroll) ? navbar.style.top="0px" : navbar.style.top="-60px"
// scroll = window.scrollY;
// })
