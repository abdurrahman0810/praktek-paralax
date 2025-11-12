let Left = document.getElementById("Left");
let Right = document.getElementById("Right");
let imgBack = document.getElementById("img-back-2");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  console.log(value);

  imgBack.style.transform = `rotate(${0.8 * value}deg )`;
  if (value <= 530) {
    Left.style.left = value * 3.9 + "px";
    Left.style.transform = `scale(${1 + value * 0.0037} )`;
    Right.style.transform = `scale(${1 + value * 0.0037} )`;
    Right.style.right = value * 3.9 + "px";
  }
});
