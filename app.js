let modes = document.querySelectorAll(".mode");
let body = document.querySelector("body");

modes.forEach((mode) => {
  mode.addEventListener("click", () => {
    let ids = mode.getAttribute("id");
    if (ids === "D") {
      body.style.backgroundColor = "black";
      body.style.color = "white";
      modes[0].classList.add("dark1");
      modes[1].classList.add("Green1");
    } else if (ids === "L") {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      modes[1].classList.remove("Green1");
      modes[0].classList.remove("dark1");
    } else if (ids === "G") {
      body.style.backgroundColor = "rgb(194, 223, 89)";
      mode.classList.add("Green1");
      modes[0].classList.add("dark1");
    }
  });
});
