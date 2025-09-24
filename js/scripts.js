document.addEventListener("DOMContentLoaded", () => {
	console.log("A Página carregou");

	const menuButton = document.querySelector(".icon-menu button");
	const mobileMenu = document.querySelector(".mobile-menu");
	const navlinks = document.querySelectorAll(".mobile-menu .nav-link");

	console.log("Botão do menu:", menuButton);
	console.log("Menu Mobile:", mobileMenu);
	console.log("Links do menu:", navlinks);
	console.log("Quantidade de links:", navlinks.length);

	menuButton.addEventListener("click", () => {
		console.log("Botão foi clicado!");
		mobileMenu.classList.toggle("active");
		console.log("Classe active adicionada/removida");
	});

	navlinks.forEach((link) => {
		link.addEventListener("click", () => {
			mobileMenu.classList.remove("active");
			console.log("Menu fechado ao clicar no link:", link.textContent);
		});
	});

	document.querySelectorAll("a[href^='#']").forEach(anchor => {
		anchor.addEventListener("click", function(e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute("href"));
			if (target) {
				const header = document.querySelector("header");
				const headerHeight = header.offsetHeight;
				const targetPosition = target.offsetTop - headerHeight;
				window.scrollTo({
					top: targetPosition,
					behavior: "smooth",
				});
			}
		});
	});
});
