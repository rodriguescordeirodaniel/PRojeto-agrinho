// ==========================================
// MENU RESPONSIVO
// ==========================================

const menuBtn = document.getElementById("menu-mobile");
const menu = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

// Fecha o menu ao clicar em um link

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("ativo");

    });

});

// ==========================================
// BOTÃO VOLTAR AO TOPO
// ==========================================

const botaoTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Esconde o botão ao carregar

botaoTopo.style.display = "none";

// ==========================================
// CABEÇALHO COM EFEITO AO ROLAR
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#0b5d1e";

        header.style.padding = "12px 8%";

    } else {

        header.style.background =
            "linear-gradient(90deg,#0b5d1e,#198754)";

        header.style.padding = "18px 8%";

    }

});

// ==========================================
// VALIDAÇÃO DO FORMULÁRIO
// ==========================================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const nome = formulario.querySelector("input[type='text']").value.trim();

    const email = formulario.querySelector("input[type='email']").value.trim();

    const mensagem = formulario.querySelector("textarea").value.trim();

    if(nome === "" || email === "" || mensagem === ""){

        alert("Preencha todos os campos!");

        return;

    }

    alert("Mensagem enviada com sucesso! Obrigado pelo contato.");

    formulario.reset();

});

// ==========================================
// QUIZ
// ==========================================

const btnQuiz = document.getElementById("btnQuiz");

btnQuiz.addEventListener("click", () => {

    let pontos = 0;

    let r1 = prompt("1) Qual tecnologia economiza água?\n\nA) Irrigação Inteligente\nB) Queimada\nC) Desmatamento");

    if(r1 !== null && r1.toUpperCase() === "A"){

        pontos++;

    }

    let r2 = prompt("2) O que ajuda a monitorar as plantações?\n\nA) Drone\nB) Bicicleta\nC) Barco");

    if(r2 !== null && r2.toUpperCase() === "A"){

        pontos++;

    }

    let r3 = prompt("3) Qual é uma fonte de energia limpa?\n\nA) Solar\nB) Carvão\nC) Diesel");

    if(r3 !== null && r3.toUpperCase() === "A"){

        pontos++;

    }

    alert("Você acertou " + pontos + " de 3 perguntas!");

});

// ==========================================
// ANIMAÇÃO DAS SEÇÕES
// ==========================================

const secoes = document.querySelectorAll("section");

const aparecer = () => {

    const topoTela = window.innerHeight * 0.85;

    secoes.forEach(secao => {

        const distancia = secao.getBoundingClientRect().top;

        if(distancia < topoTela){

            secao.style.opacity = "1";

            secao.style.transform = "translateY(0)";

        }

    });

};

secoes.forEach(secao => {

    secao.style.opacity = "0";

    secao.style.transform = "translateY(60px)";

    secao.style.transition = "1s";

});

window.addEventListener("scroll", aparecer);

aparecer();

// ==========================================
// MENSAGEM DE BOAS-VINDAS
// ==========================================

window.addEventListener("load", () => {

    setTimeout(() => {

        alert("🌱 Bem-vindo ao Agro Forte - Futuro Sustentável!");

    }, 600);

});

// ==========================================
// EFEITO NOS CARDS
// ==========================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ==========================================
// IMAGENS DA GALERIA
// ==========================================

const imagens = document.querySelectorAll(".galeria img");

imagens.forEach(img => {

    img.addEventListener("click", () => {

        alert("Imagem: " + img.alt);

    });

});

// ==========================================
// ANO AUTOMÁTICO NO RODAPÉ
// ==========================================

const rodape = document.querySelector("footer p");

if (rodape) {

    rodape.innerHTML = "© " + new Date().getFullYear() + " | Agro Forte - Futuro Sustentável";

}

console.log("Projeto Agrinho 2026 carregado com sucesso!");
