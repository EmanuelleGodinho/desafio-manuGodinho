const botoesEspecialidade = document.querySelectorAll(".especialidades button");

botoesEspecialidade.forEach(function(botao) {

    botao.addEventListener("click", function() {

        botoesEspecialidade.forEach(function(outroBotao) {
            outroBotao.classList.remove("selecionado");
        });

        botao.classList.add("selecionado");

    });

});
.especialidades button.selecionado {
    background-color: #176b87;
    color: white;
    border: 2px solid #0d4f63;
}
