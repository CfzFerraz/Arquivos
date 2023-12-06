function promocao(){
    let preco = document.getElementById("val").value;//var para armazenar a entrada da vacina
    let resultado = preco * 0.85;//var para fazer o desconto
    document.getElementById("b1").innerHTML = (resultado);//id para mostrar o desconto no html
    document.getElementById("b2").textContent = "Esse é o valor com 15% de desconto";//id para mostrar o texto no html
}
function promocao2(){
    let preco = document.getElementById("val").value;//var para armazenar a entrada da vacina
    let resultado = preco * 0.90;//var para fazer o desconto
    document.getElementById("b1").innerHTML = (resultado);//id para mostrar o desconto no html
    document.getElementById("b2").textContent = "Esse é o valor com 10% de desconto";//id para mostrar o texto no html
}
function promocao3(){
    let preco = document.getElementById("val").value;//var para armazenar a entrada da vacina
    let resultado = preco;
    document.getElementById("b1").innerHTML = (resultado);
    document.getElementById("b2").textContent = "Esse é o valor sem desconto";
}
function fim(){
    alert ("Sua compra foi finalizada");
}