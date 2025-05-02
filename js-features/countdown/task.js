const timer = document.getElementById("timer");

function tick() {
  if (timer.textContent == 0) {
    alert("Вы победили в конкурсе");
    clearInterval(tick1);
  } else {
    timer.textContent = Number(timer.textContent) - 1;
  }
}

const tick1 = setInterval(tick, 1000);
