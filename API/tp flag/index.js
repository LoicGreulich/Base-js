let countriesData = [];
let sortMethod = "maxToMin";
const countriesContainer = document.querySelector(".countries-container");
let btn = document.querySelectorAll(".btnSort");

async function fetchDisplay() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countriesData = data));

  console.log(countriesData);
  countriesDisplay();
}

function countriesDisplay() {
  countriesContainer.innerHTML = countriesData
    .filter((country) =>
      country.translations.fra.common
        .toLowerCase()
        .includes(inputSearch.value.toLowerCase())
    )
    .sort((a, b) => {
      if (sortMethod === "maxToMin") {
        return b.population - a.population;
      } else if (sortMethod === "minToMax") {
        return a.population - b.population;
      } else if (sortMethod === "alpha") {
        return a.translations.fra.common.localeCompare(
          b.translations.fra.common
        );
      }
    })
    .slice(0, inputRange.value)
    .map(
      (country) =>
        `
  <div class="card">
  <img src=${country.flags.svg} alt="${country.translations.fra.common}">
  <h3>${country.translations.fra.common}</h3>
  <h4>${country.capital}</h4>
  <h4>Population : ${country.population.toLocaleString()}</h4>
  </div>
  `
    )
    .join();
}

window.addEventListener("load", fetchDisplay);

inputSearch.addEventListener("input", countriesDisplay);

inputRange.addEventListener("input", () => {
  countriesDisplay();
  rangeValue.textContent = inputRange.value;
});

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    sortMethod = e.target.id;
    countriesDisplay();
  });
});
