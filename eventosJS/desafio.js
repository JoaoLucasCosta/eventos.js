const caixa = document.getElementById("caixa");
const botao = document.getElementById("botao");

botao.addEventListener("mouseover", () => {
        caixa.classList.replace("oculto", "visivel");
});

botao.addEventListener("mouseout", () => {
        caixa.classList.replace("visivel", "oculto");
}); 