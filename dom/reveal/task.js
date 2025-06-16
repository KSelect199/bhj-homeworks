document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".reveal");

  function checkVisibility() {
    blocks.forEach((block) => {
      const rect = block.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible) {
        block.classList.add("reveal_active");
      }
    });
  }

  checkVisibility();
  window.addEventListener("scroll", checkVisibility);
});
