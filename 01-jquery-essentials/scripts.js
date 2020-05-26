$(function () {
    $(".jquery_essentials").html("jquery essentials!");

    console.group("Mensagens Gerais");
    console.log("jQuery Essentials");
    console.info("o jQuery foi carrefado com sucesso!");
    console.warn("um aleta");
    console.error("um erro");
    console.error("um erro");
    console.groupEnd();

    var cadastro = false;

    console.group("Cadastros de Ususarios ");
    console.info("Cadastro iniciado");

    if (cadastro === true) {
        console.log("cadastro Realizado");
    } else {
        console.warn("Erro ao cadastrar");
    }
    console.groupEnd();

});