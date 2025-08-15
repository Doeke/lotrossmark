const speed = 1.5;
const canvas = document.getElementById("canvas");
const container = document.getElementById("logocontainer");
const logo = document.getElementById("logo");
const logo2 = container.appendChild(logo.cloneNode());

function draw() {
  const t = (performance.now() / 1000) * speed;
  const w = container.clientWidth;
  const y =
    (container.clientHeight - logo.clientHeight) * (0.5 - 0.5 * Math.sin(t));
  const x = (((w * t) / 30) % w) + (w - logo.clientWidth) / 2;
  logo.style = `position:absolute;left:${x}px;top:${y}px`;
  logo2.style = `position:absolute;left:${x - w}px;top:${y}px`;

  requestAnimationFrame(draw);
}
draw();
