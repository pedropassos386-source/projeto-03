// =========================
// BOTÃO VOLTAR AO TOPO
// =========================

const btnTopo = document.getElementById("btnTopo");

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// =========================
// MENU MOBILE
// =========================

const mobileMenu = document.querySelector(".mobile-menu");
const menuLista = document.querySelector(".mobile-menu ul");

mobileMenu.addEventListener("click", () => {
    menuLista.classList.toggle("ativo");
});


// =========================
// SLIDER DE DEPOIMENTOS
// =========================

const depoimentos = [
    {
        nome: "Felipe Caldas Pereira",
        cargo: "Sub-Mestre / Jogador Veterano",
        foto:"./imagens/felipe.jpeg",
        texto: "Jogar uma segunda campanha na mesa de um amigo é diferente. Na primeira, tudo é novidade; na segunda, tudo traz lembranças. Voltar com a filha do meu antigo personagem faz cada lugar e história terem um peso emocional maior. Ela não parece só “mais uma ficha”. Carrega o legado do pai enquanto tenta criar a própria identidade. E é isso que torna o RPG especial: não são só dados ou combates, mas memórias e emoções construídas ao longo dos anos. No fim, a campanha acaba crescendo junto com a gente."
    },

    {
        nome: "Danilo Augusto",
        cargo: "Jogador Veterano",
        foto:"./imagens/rosa.jpg",
        texto: "Jogar a mesa do Pedro é uma experiência divertida. Não foram raros os momentos que em uma hora ele era o cara mais bacana do mundo, e na outra eu queria voar no pescoço dele. Mas brincadeiras a parte, é bastante divertido, tanto dentro quanto fora da mesa, lembro que antigamente, todo final de sessão, a gente fazia um bocado de memes sobre oque tinha ( particularmente os meus eram os mais engraçados, mas nenhum dos outros tem que saber disso ). Se você procura um espaço bacana, amigável e tá afim de perder um pouco de sanidade, essa mesa é pra você."
    },

    {
        nome: "Pedro Passos",
        cargo: "Mestre / Criador do In the Mind",
        foto:"./imagens/akatsuki.jpeg",
        texto: "Quando criei este mundo, não imaginava que ele realmente daria certo. Mas, ao ver os jogadores se divertindo, rindo e criando momentos inesquecíveis juntos, eu finalmente entendi o que significa ser mestre de RPG. A partir daquele momento, as loucuras se tornaram cada vez mais comuns, e cada sessão passou a trazer histórias que jamais poderiam ser planejadas. Afinal, como um dos jogadores costuma dizer: 'O dia mais louco nesta mesa é apenas mais um dia comum.' "
    },


];

const bullets = document.querySelectorAll(".slider-bullets span");

const nomeAutor = document.querySelector(".titulo-autor h2");
const cargoAutor = document.querySelector(".titulo-autor p");
const textoAutor = document.querySelector(".texto-autor p");
const fotoAutor = document.querySelector(".img-autor");

function carregarDepoimento(index) {

    nomeAutor.textContent = depoimentos[index].nome;
    cargoAutor.textContent = depoimentos[index].cargo;
    textoAutor.textContent = depoimentos[index].texto;

    fotoAutor.style.backgroundImage =
        `url('${depoimentos[index].foto}')`;

    bullets.forEach(bullet => {
        bullet.classList.remove("ativo");
    });

    bullets[index].classList.add("ativo");
}

// Carrega automaticamente o primeiro depoimento
carregarDepoimento(0);

// Eventos dos spans
bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", () => {
        carregarDepoimento(index);
    });
});




