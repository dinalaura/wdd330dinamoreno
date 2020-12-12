const cell = ;
const playerOne = "O";
const playerTwo = "X";
cell.forEach((element) => {
  element.addEventListener('click', () => myFunction(element));
});

function myFunction() {
  document.querySelector(".grid-item").innerHTML = playerOne;
}
cell.addEventListener('click', myFunction);

