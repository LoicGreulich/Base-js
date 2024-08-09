const form = document.querySelector("form");

let storeList = () => {
  window.localStorage.hello = list.innerHTML;
};

let goList = () => {
  if (window.localStorage.hello) {
    list.innerHTML = window.localStorage.hello;
  } else {
    list.innerHTML = `<li>Supprimer la todo</li>`;
  }
};
window.addEventListener("load", goList);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});
