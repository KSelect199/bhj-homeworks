let idTab = 0;
Array.from(document.querySelectorAll(".tab")).forEach((e) => {
  let idContent = 0;
  e.id = idTab;
  idTab += 1;
  Array.from(document.querySelectorAll(".tab__content")).forEach((value) => {
    value.id = idContent;
    idContent += 1;

    addEventListener("click", (event) => {
      if (event.target.classList[0] == "tab") {
        if (e.id == event.target.id) {
          e.classList.add("tab_active");
          value.classList.remove("tab__content_active");
          if (event.target.id == value.id)
            value.classList.add("tab__content_active");
        } else {
          e.classList.remove("tab_active");
        }
      }
    });
  });
});
