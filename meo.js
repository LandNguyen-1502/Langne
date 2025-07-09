const cat = document.getElementById("cat");

cat.addEventListener("click", () => {
  const msg = document.createElement("div");
  msg.className = "message";
  msg.innerText = "Tí đi ăn mỳ cay không em êiyyyy 💖";

  const catRect = cat.getBoundingClientRect();
  msg.style.left = `${cat.offsetLeft + cat.offsetWidth / 2 - 60}px`;
  msg.style.top = `${cat.offsetTop - 20}px`;

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 2000);
});
