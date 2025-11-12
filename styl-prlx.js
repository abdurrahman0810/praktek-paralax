let Left = document.getElementById("Left");
let Right = document.getElementById("Right");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  console.log(value);

  if (value <= 530) {
    Left.style.left = value * 3.9 + "px";
    Left.style.transform = `scale(${1 + value * 0.0037} )`;
    Right.style.transform = `scale(${1 + value * 0.0037} )`;
    Right.style.right = value * 3.9 + "px";
  }
});
