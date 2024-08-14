const target = document.getElementById("target");
let array = ["sportif", "historien", "philosophe"];
let wordIndex = 0;
let letterIndex = 0;

const creatLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex === array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      creatLetter();
      letterIndex++;
      loop();
    } else {
      setTimeout(() => {
        wordIndex++;
        letterIndex = 0;
        loop();
      }, 2800);
    }
  }, 60);
};
loop();
