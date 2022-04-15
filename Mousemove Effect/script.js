document.addEventListener("mousemove", function (e) {
  let body = document.querySelector("body");
  let obg = document.createElement("span");
  let x = e.offsetX;
  let y = e.offsetY;

  obg.style.left = x + "px";
  obg.style.top = y + "px";

  let size = Math.random() * 80;
  obg.style.width = 20 + size + "px";
  obg.style.height = 20 + size + "px";

  let transformValue = Math.random() * 360;
  obg.style.transform = `rotate(${transformValue}deg)`;

  body.appendChild(obg);

  setTimeout(function () {
    obg.remove();
  }, 1000);
});
