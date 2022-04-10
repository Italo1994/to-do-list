function incluirNaLista() {
    let entrada = document.getElementById("entrada");
    let texto = entrada.value;
    let lista = document.getElementsByClassName("lista");

    var div = document.createElement("div");
    var conteudo = document.createTextNode(texto);
    div.appendChild(conteudo);
    lista.createElement(div);
}