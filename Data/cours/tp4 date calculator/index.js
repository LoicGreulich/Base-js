const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today;

const tommorow = new Date();
tommorow.setDate(tommorow.getDate() + 1);

let tommorowFormat = tommorow.toISOString().split("T")[0];

end_date.value = tommorowFormat;
end_date.min = tommorowFormat;

start_date.addEventListener("input", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
});

end_date.addEventListener("input", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
  }
});

const bookingCalcul = () => {
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  );
  let diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  total.textContent = nightPrice.textContent * diffDay;
};

start_date.addEventListener("input", bookingCalcul);
end_date.addEventListener("input", bookingCalcul);
