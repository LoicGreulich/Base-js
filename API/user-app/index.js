let userData = [];

const userFetch = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));

  console.log(userData);
};

const userDisplay = async () => {
  await userFetch();

  const dateParse = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  const dateCalc = (date) => {
    let today = new Date();
    let todayTimestemp = Date.parse(today);
    let timestemp = Date.parse(date);

    return Math.ceil((todayTimestemp - timestemp) / 8.64e7);
  };

  document.body.innerHTML = userData.map(
    (user) =>
      `<div class ="card" >
      <img src=${user.picture.large}
    <h3>${user.name.first} ${user.name.last}</h3>
    <p>${user.location.city} ${dateParse(user.dob.date)}</p>
    <em>membres depuis : ${dateCalc(user.registered.date)} jours</em>
    </div>`
  );
};

userDisplay();
