const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
document.addEventListener("click", function (e) {
  let targetClick = e.target.className;
  if (targetClick === "hole hole_has-mole") {
    dead.textContent = Number(dead.textContent) + 1;
  } else if (targetClick === "hole") {
    lost.textContent = Number(lost.textContent) + 1;
  }

  if (lost.textContent == 5) {
    alert("Вы проиграли");
    dead.textContent = 0;
    lost.textContent = 0;
  }

  if (dead.textContent == 10) {
    alert("Вы победили");
    dead.textContent = 0;
    lost.textContent = 0;
  }
});
