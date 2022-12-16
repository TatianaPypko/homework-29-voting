const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
  const { target } = event;

  if (target.className !== "smile") return;

  let num = target.nextElementSibling.textContent;
  num.innerHTML = parseInt(num.innerHTML, 0) + 1;

  target.nextElementSibling.innerHTML = "";
  target.nextElementSibling.innerHTML += ++num;
});
