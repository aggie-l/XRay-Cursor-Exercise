const cursor = document.querySelector(".cursor");
const text = document.querySelector(".text");

text.style.setProperty("--x", "0px");
text.style.setProperty("--y", "0px");

window.addEventListener("mousemove", (e) => {
  const positionX = e.clientX;
  const positionY = e.clientY;

  cursor.style.left = `${positionX - 20}px`;
  cursor.style.top = `${positionY - 20}px`;
});

text.addEventListener("mousemove", (e) => {
  const x = e.offsetX;
  const y = e.offsetY;

  text.style.setProperty("--x", `${x}px`);
  text.style.setProperty("--y", `${y}px`);
});