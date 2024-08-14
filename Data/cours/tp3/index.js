let totalSeconds;
let interval;

const countDown = () => {
  let minute = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let sec = seconds < 10 ? "0" + seconds : seconds;

  countdownDisplay.textContent = `${minute} : ${sec}`;

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.textContent = "c'est terminé ";
    clearInterval(interval);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(choice.value)) {
    alert("veuillez entrez un nombre");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    clearInterval(interval);
    interval = setInterval(countDown, 100);
  }
});
