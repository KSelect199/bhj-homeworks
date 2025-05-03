const decorator = document.getElementsByClassName("indicator");

const arr = () =>
  Array.from(document.querySelectorAll(".volume-rect")).forEach(
    (element, index) => {
      if (index < Number(decorator[0].textContent)) {
        element.className = "volume-rect volume-rect__active ";
      } else {
        element.className = "volume-rect";
      }
    }
  );

addEventListener("click", (e) => {
  if (e.target.className == "volume-up") {
    if (Number(decorator[0].textContent) < 10) {
      decorator[0].textContent = Number(decorator[0].textContent) + 1;
      arr();
    }
  } else if (e.target.className == "volume-down") {
    if (Number(decorator[0].textContent) > 0) {
      decorator[0].textContent = Number(decorator[0].textContent) - 1;
      arr();
    }
  }
});
