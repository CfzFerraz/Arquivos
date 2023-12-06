/*function promocao(){
    document.getElementById("b1").innerHTML = ("PROMOÇÂO!!!!");
    document.getElementById("b2").innerHTML = ("Medicamento: Aspirina");
    document.getElementById("b3").innerHTML = ("R$: 14,00");
}*/
function offpromocao(){
    document.getElementById("b1").innerHTML = ("");
    document.getElementById("b2").innerHTML = ("");
    document.getElementById("b3").innerHTML = ("");
}
function promocao(){
    let nome = document.getElementById("Med").value;
    let preco = document.getElementById("Pre").value;
    let resultado = preco * 2 - preco * 0.1;
    document.getElementById("b1").innerHTML = ("PROMOÇÂO LEVE 2 POR!!!!");
    document.getElementById("b2").innerHTML = (nome);
    document.getElementById("b3").innerHTML = (resultado);
}