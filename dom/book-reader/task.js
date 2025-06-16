document.addEventListener("DOMContentLoaded", () => {
  const book = document.getElementById("book");
  const buttons = document.querySelectorAll(
    ".book__control_font-size .font-size"
  );

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      buttons.forEach((btn) => btn.classList.remove("font-size_active"));
      this.classList.add("font-size_active");

      const size = this.dataset.size;
      book.classList.remove("book_fs-small", "book_fs-big");

      if (size === "small") {
        book.classList.add("book_fs-small");
      } else if (size === "big") {
        book.classList.add("book_fs-big");
      }
    });
  });
});
