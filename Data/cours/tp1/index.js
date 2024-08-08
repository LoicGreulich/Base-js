const colorGenerator = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const rgb = `rgb(${red},${blue},${green})`;

  const body = document.querySelector("body");

  body.style.background = rgb;
  body.innerHTML = `<h1>${rgb}</h1>`;
  body.style.transition = "1s";
};
setInterval(colorGenerator, 2000);
