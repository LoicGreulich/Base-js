const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = ',;:!?./§"';
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

const generatePassword = () => {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);
  if (data.length === 0) {
    alert("veuillez cochez");
    return;
  }
  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;

  passwordOutput.select();
  navigator.clipboard.writeText(passwordOutput.value);

  generateButton.textContent = "copié";

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
};

generateButton.addEventListener("click", generatePassword);
