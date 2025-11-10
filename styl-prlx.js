let Left = document.getElementById("Left");
let Right = document.getElementById("Right");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  console.log(value);

  Left.style.left = value * 3.7 + "px";
  Left.style.transform = `scale(${1 + value * 0.0037} )`;
  Right.style.transform = `scale(${1 + value * 0.0037} )`;
  Right.style.right = value * 3.7 + "px";
});
