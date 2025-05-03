let ids = 0;
Array.from(document.querySelectorAll(".dropdown__value")).forEach((e) => {
  e.id = ids;
  ids += 1;
  e.onclick = () => {
    e.parentElement.querySelector("ul").classList.add("dropdown__list_active");
  };

  addEventListener("click", (event) => {
    if (event.target.className === "dropdown__link") {
      event.target.parentElement.parentElement.parentElement.querySelector(
        ".dropdown__value"
      ).textContent = event.target.textContent;
      e.parentElement
        .querySelector("ul")
        .classList.remove("dropdown__list_active");
    }
  });
});
