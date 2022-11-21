const elForm = document.querySelector(".cart__forim");
const elInput = document.querySelector("#input");
const buttonTen = document.querySelector(".buttonjs");
const foot = document.querySelector("#foot");
const bice = document.querySelector("#bice");
const car = document.querySelector("#car");
const plane = document.querySelector("#plane");

const footB = 3.6;
const biceB = 20.1;
const carB = 70;
const planeB = 800;

// funksiya

// function gettingHour(time) {
//   const hour = Math.floor(time / 60);
//   const minut = Math.floor(time % 60);

//   return `${hour} hrs ${minut} minut`;
// }

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   const elInputValue = Number(elInput.value * 1000);

//   const perSon = elInputValue / footB;
//   foot.textContent = gettingHour(perSon);

//   const biceSon = elInputValue / biceB;
//   bice.textContent = gettingHour(biceSon);

//   const carSon = elInputValue / carB;
//   car.textContent = gettingHour(carSon);

//   const plaaneSon = elInputValue / planeB;
//   plane.textContent = gettingHour(plaaneSon);
// });

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  // FootB

  const perSon = (elInput.value / footB) * 1000;
  const hour = Math.floor(perSon / 60);
  const minut = Math.floor(perSon % 60);
  foot.textContent = `${hour} hrs ${minut} min`;

  const biceSon = (elInput.value / biceB) * 1000;
  const hourB = Math.floor(biceSon / 60);
  const minutB = Math.floor(biceSon % 60);

  bice.textContent = `${hourB} hrs ${minutB} min`;
  const carSon = (elInput.value / carB) * 1000;
  const hourC = Math.floor(carSon / 60);
  const minutC = Math.floor(carSon % 60);

  car.textContent = `${hourC} hrs ${minutC} min`;
  const plaaneSon = (elInput.value / planeB) * 1000;
  const hourP = Math.floor(plaaneSon / 60);
  const minutP = Math.floor(plaaneSon % 60);

  plane.textContent = `${hourP} hrs ${minutP} min`;
});
