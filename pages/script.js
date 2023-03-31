var inputTitle = document.getElementById("inputTitle");

inputTitle.addEventListener("input", function () {
    var valorAntigo = this.value;
    var novoValor = valorAntigo.replace(/[^a-zA-Z]/g, '');
    if (valorAntigo !== novoValor) {
        this.value = novoValor;
    }
});

var inputPrice = document.getElementById("inputPrice");

inputPrice.addEventListener("change", function () {
    var valor = this.value;

    valor = valor.replace(/[^\d\.]/g, '');

    var valorNumerico = parseFloat(valor);

    if (valorNumerico < 0) {
        this.value = "0";
    } else {
        this.value = valorNumerico.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
});

const formNewProd = document.querySelector("#formNewProd")
formNewProd.onsubmit = function (e) {
    e.preventDefault()

    const formData = new FormData(formNewProd)
    const inputTitleValue = formData.get("title")
    const inputPriceValue = formData.get("price")

    if (inputTitleValue.length == 0) {
        alert("O nome do produto é obrigatório!")
        return false
    } else if (inputTitleValue.length < 5) {
        alert("O nome do produto deve conter ao menos 5 letras!")
        return false
    } else if (inputPriceValue.length == 0) {
        alert("O preço do produto é obrigatório!")
        return false
    } else if (inputPriceValue < 0) {
        alert("O preço do produto deve ser positivo!")
        return false
    } else {
        return true
    }
};
