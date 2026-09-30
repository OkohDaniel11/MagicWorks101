const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const menuButton = document.querySelector(".NavBar");
const closeButtons = document.querySelectorAll(".close-nav, .overlay");
const navigation = document.querySelector(".site-nav");

function setMenuOpen(isOpen) {
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  navigation.setAttribute("aria-hidden", String(!isOpen));
}

menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => setMenuOpen(false));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});
