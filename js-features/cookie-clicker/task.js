const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

cookie.onclick = () => {
  if (cookie.width === 200) {
    cookie.width = 300;
  } else {
    cookie.width = 200;
  }
  counter.textContent = Number(counter.textContent) + 1;
};
