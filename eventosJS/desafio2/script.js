const mensagem = document.getElementById("mensagem");
const mudaMensagem = document.getElementById("mudaMensagem");
const Reiniciar = document.getElementById("Reiniciar")

mudaMensagem.addEventListener("click", () => {
    mensagem.innerText += "Mensagem alterada com sucesso!";
});

Reiniciar.addEventListener("click",function() {
    location.reload();
});


