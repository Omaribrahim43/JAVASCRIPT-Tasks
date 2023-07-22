let color = document.getElementById("color");

color.onchange = () => {
  document.body.style.backgroundColor = color.value;
  sessionStorage.setItem("bodyColor", color.value);
};

document.body.style.backgroundColor = sessionStorage.getItem("bodyColor");
color.value = sessionStorage.getItem("bodyColor");
