const form = document.querySelector("form");

let totalSeconds;
let interval;

function countDown() {
  const ring = () => {
    const audio = new Audio();
    audio.src = "Enter.mp3";
    audio.play();
  };
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const sec = seconds < 10 ? "0" + seconds : seconds;
  countdownDisplay.textContent = minutes + " : " + sec;
  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.textContent = "c'est terminé";
    clearInterval(interval);
    ring();
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choice.value)) {
    alert("entrez un chiffre");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
});
