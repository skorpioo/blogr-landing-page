const nav = document.querySelector(".header__nav");
const navLinks = nav.querySelectorAll("ul li a");
const menuToggle = document.querySelector(".header__toggle");

menuToggle.addEventListener("click", () => {
	const isOpened = menuToggle.getAttribute("aria-expanded") === "true";
	if (isOpened ? closeMenu() : openMenu());
});

function openMenu() {
	menuToggle.setAttribute("aria-expanded", "true");
	nav.setAttribute("data-state", "opened");
}
function closeMenu() {
	menuToggle.setAttribute("aria-expanded", "false");
	nav.setAttribute("data-state", "closing");

	nav.addEventListener(
		"animationend",
		() => {
			nav.setAttribute("data-state", "closed");
		},
		{ once: true },
	);
}

navLinks.forEach(e => {
	e.addEventListener("click", function () {
		const isOpened = menuToggle.getAttribute("aria-expanded") === "true";
		if (isOpened) {
			closeMenu();
		}
	});
});

window.addEventListener("click", function (e) {
	const isOpened = menuToggle.getAttribute("aria-expanded") === "true";

	if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
		if (isOpened) {
			closeMenu();
		}
	}
});
