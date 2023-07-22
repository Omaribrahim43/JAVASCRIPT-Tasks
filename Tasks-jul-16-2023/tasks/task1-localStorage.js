let list = document.querySelectorAll("ul li");
let test = document.querySelector(".test");

// window.localStorage.clear();
if (window.localStorage.getItem("color")) {
  test.style.backgroundColor = window.localStorage.getItem("color");
  list.forEach((li) => {
    li.classList.remove("active");
  });
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
} else {
  console.log("No");
}
list.forEach((li) => {
  li.addEventListener("click", (e) => {
    list.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    test.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
