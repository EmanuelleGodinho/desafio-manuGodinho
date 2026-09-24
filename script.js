const botoesEspecialidade = document.querySelectorAll(".especialidades button");

botoesEspecialidade.forEach(function(botao) {

    botao.addEventListener("click", function() {

        botoesEspecialidade.forEach(function(outroBotao) {
            outroBotao.classList.remove("selecionado");
        });

        botao.classList.add("selecionado");

    });

});
