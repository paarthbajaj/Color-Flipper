import "./styles.css";
var randomColor = "#";
var colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

var button = document.querySelector(".button");
button.addEventListener("click", () => {
  for (var i = 0; i < 6; i++) {
    randomColor = randomColor + colorArray[Math.floor(Math.random() * 15)];
    // console.log(randomColor);
  }
  console.log(randomColor);
  document.querySelector(".color").style.backgroundColor = randomColor;
  document.querySelector(
    ".bgColor"
  ).innerText = `Background Color: ${randomColor}`;
  randomColor = "#";
});
