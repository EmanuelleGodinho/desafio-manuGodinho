let especialidadeSelecionada = "";
let profissionalSelecionado = "";
let horarioSelecionado = "";


function mostrarTela(id) {

    const telas = document.querySelectorAll(".tela");

    telas.forEach(function(tela) {
        tela.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function selecionarEspecialidade(botao, especialidade) {

    const botoes = document.querySelectorAll(".especialidades button");

    botoes.forEach(function(outroBotao) {
        outroBotao.classList.remove("selecionado");
    });

    botao.classList.add("selecionado");

    especialidadeSelecionada = especialidade;
}


function irParaTela2() {

    if (especialidadeSelecionada === "") {

        alert(
            "Erro 492: nenhuma especialidade foi encontrada. Talvez você tenha esquecido de escolher uma."
        );

        return;
    }

    document.getElementById("especialidadeEscolhida").textContent =
        especialidadeSelecionada;

    mostrarTela("tela2");
}


function selecionarProfissional(botao, profissional) {

    const botoes = document.querySelectorAll(".profissionais button");

    botoes.forEach(function(outroBotao) {
        outroBotao.classList.remove("selecionado");
    });

    botao.classList.add("selecionado");

    profissionalSelecionado = profissional;
}


function irParaTela3() {

    if (profissionalSelecionado === "") {

        alert(
            "O profissional ainda não foi selecionado. Isso provavelmente é importante."
        );

        return;
    }

    mostrarTela("tela3");
}


function selecionarHorario(botao, horario) {

    const botoes = document.querySelectorAll(".horarios button");

    botoes.forEach(function(outroBotao) {
        outroBotao.classList.remove("selecionado");
    });

    botao.classList.add("selecionado");

    horarioSelecionado = horario;
}


function irParaTela4() {

    const data = document.getElementById("data").value;

    if (data === "") {

        alert(
            "Data não encontrada. Escolha uma data antes de continuar."
        );

        return;
    }

    if (horarioSelecionado === "") {

        alert(
            "Horário aparentemente não selecionado. Tente escolher um."
        );

        return;
    }

    mostrarTela("tela4");
}


function finalizarAgendamento() {

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const cor = document.getElementById("cor").value;
    const animal = document.getElementById("animal").value;

    const mensagemErro = document.getElementById("mensagemErro");

    mensagemErro.style.display = "none";
    mensagemErro.textContent = "";


    if (nome === "") {

        mensagemErro.textContent =
            "Erro: seu nome está vazio. O sistema precisa saber quem está tentando agendar.";

        mensagemErro.style.display = "block";

        return;
    }


    if (cpf === "") {

        mensagemErro.textContent =
            "Erro: CPF necessário para prosseguir. A ausência dele deixou o sistema desconfortável.";

        mensagemErro.style.display = "block";

        return;
    }


    if (telefone === "") {

        mensagemErro.textContent =
            "Erro: telefone não informado. Como entrar em contato com você sem o telefone?";

        mensagemErro.style.display = "block";

        return;
    }


    if (email === "") {

        mensagemErro.textContent =
            "Erro: e-mail não informado. Talvez seja importante para uma confirmação.";

        mensagemErro.style.display = "block";

        return;
    }


    if (cor === "") {

        mensagemErro.textContent =
            "Erro 301: sua cor favorita não foi informada. Esta informação aparentemente é indispensável.";

        mensagemErro.style.display = "block";

        return;
    }


    if (animal === "") {

        mensagemErro.textContent =
            "Erro: você ainda não informou qual animal seria.";

        mensagemErro.style.display = "block";

        return;
    }


    document.getElementById("resumoEspecialidade").textContent =
        especialidadeSelecionada;

    document.getElementById("resumoProfissional").textContent =
        profissionalSelecionado;

    document.getElementById("resumoData").textContent =
        document.getElementById("data").value;

    document.getElementById("resumoHorario").textContent =
        horarioSelecionado;

    mostrarTela("telaFinal");
}


function voltarParaTela1() {
    mostrarTela("tela1");
}


function voltarParaTela2() {
    mostrarTela("tela2");
}


function voltarParaTela3() {
    mostrarTela("tela3");
}
