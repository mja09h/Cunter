let counter = 0;

const count = () => {
  counter++;
  document.getElementById("dis").innerHTML = counter;
  if (counter % 100 === 0) {
    alert(`Count is now ${counter}`);
  }};

document.addEventListener("DOMContentLoaded", functhion() {
  document.getElementById("btn-count").onclick = count;
});
