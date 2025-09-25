document.addEventListener("DOMContentLoaded", () => {

	const menuButton = document.querySelector(".icon-menu button");
	const mobileMenu = document.querySelector(".mobile-menu");
	const navlinks = document.querySelectorAll(".mobile-menu .nav-link");

	menuButton.addEventListener("click", () => {
		mobileMenu.classList.toggle("active");
	});

	navlinks.forEach((link) => {
		link.addEventListener("click", () => {
			mobileMenu.classList.remove("active");
		});
	});

	document.querySelectorAll("a[href^='#']").forEach(anchor => {
		anchor.addEventListener("click", function(e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute("href"));
			if (target) {
				const header = document.querySelector("header");
				const headerHeight = header.offsetHeight;
				const targetPosition = target.offsetTop - headerHeight - 10;
				window.scrollTo({
					top: targetPosition,
					behavior: "smooth",
				});
			}
		});
	});
});
