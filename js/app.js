const checkbox = document.getElementById("checkbox");
const list_nav = document.getElementById("list_nav");
const display_value = window.getComputedStyle(list_nav).display;

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    list_nav.classList.add("active");
    checkbox.style.position = "relative";
    checkbox.style.zIndex = "999";
  } else {
    list_nav.classList.remove("active");
  }
});
