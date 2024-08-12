const form = document.querySelector("form");

const inputs = document.querySelectorAll(
  'input[type = "text"],input[type = "password"]'
);
const progressBar = document.querySelector("#progress-bar");
let pseudo, email, password, confirmPass;

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span ");
  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
  }
};

const pseudoCheckeur = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "pseudo non valide");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "le pseudo ne doit pas contenir de caractére spéciaux"
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};

const emailCheckeur = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "l'email n'est pas correct");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const passwordCheckeur = (value) => {
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplay("password", "mot de passe incorrect");
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    errorDisplay("password", "", true);
    progressBar.classList.add("progressBlue");
    password = value;
  } else {
    progressBar.classList.add("progressGreen");
    errorDisplay("password", "", true);
    password = value;
  }
  if (value.length === 0) {
    progressBar.classList = "";
    errorDisplay("password", "");
    password = null;
  }
  if (confirmPass) {
    confirmPassCheckeur(confirmPass);
  }
};

const confirmPassCheckeur = (value) => {
  if (value === password) {
    errorDisplay("confirm", "", true);
    confirmPass = true;
  } else {
    errorDisplay("confirm", "ne correspond pas");
    confirmPass = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoCheckeur(e.target.value);
        break;
      case "email":
        emailCheckeur(e.target.value);
        break;
      case "password":
        passwordCheckeur(e.target.value);
        break;
      case "confirm":
        confirmPassCheckeur(e.target.value);
        break;
      default:
        null;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (pseudo && email && password && confirmPass) {
    let data = {
      pseudo,
      email,
      password,
    };

    progressBar.classList = "";
    inputs.forEach((input) => (input.value = ""));

    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
    alert("valider");
  } else {
    alert("veuillez remplir");
  }
});
