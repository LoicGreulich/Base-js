const form = document.querySelector("form");

let storList = () => {
  window.localStorage.toList = list.innerHTML;
};

let goList = () => {
  if (window.localStorage.toList) {
    list.innerHTML = window.localStorage.toList;
  } else {
    list.innerHTML = `<li>Pour supprimer todolist</li>`;
  }
};
goList();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storList();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storList();
});
