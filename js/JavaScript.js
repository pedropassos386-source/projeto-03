const btnTopo = document.getElementById("btnTopo");

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const mobileMenu = document.querySelector(".mobile-menu");
const menuLista = document.querySelector(".mobile-menu ul");

mobileMenu.addEventListener("click", () => {
    menuLista.classList.toggle("ativo");
});