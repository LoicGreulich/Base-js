// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

lastScroll = 0;
window.addEventListener("scroll", () => {
  if (scrollY > lastScroll) {
    navbar.style.height = "50px";
  } else {
    navbar.style.height = "90px";
  }
  if (scrollY > 300) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "none";
  } else {
    imgImprovise.style.opacity = "0";
    imgImprovise.style.transform = "translateX(-200px)";
  }

  if (scrollY > 1300) {
    popup.style.opacity = "1";
    popup.style.transform = "none";
  } else {
    popup.style.opacity = "0";
    popup.style.transform = "translateX(400px)";
  }

  lastScroll = window.scrollY;
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = "0";
  popup.style.transform = "translateX(400px)";
});

// let playOnce = true;

// window.addEventListener("scroll", () => {
//   // Navbar effect
//   if (window.scrollY > 50) {
//     navbar.style.height = "45px";
//   } else {
//     navbar.style.height = "90px";
//   }

//   let scrollValue =
//     (window.scrollY + window.innerHeight) / document.body.offsetHeight;
//   console.log(scrollValue);
//   // Image
//   if (scrollValue > 0.45) {
//     imgImprovise.style.opacity = 1;
//     imgImprovise.style.transform = "none";
//   }

//   // Popup
//   if (scrollValue > 0.85 && playOnce) {
//     popup.style.opacity = 1;
//     popup.style.transform = "none";
//     playOnce = false;
//   }
// });

// closeBtn.addEventListener("click", () => {
//   popup.style.opacity = 0;
//   popup.style.transform = "translateX(500px)";
// });
