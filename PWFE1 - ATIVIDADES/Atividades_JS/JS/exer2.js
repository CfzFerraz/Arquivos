/*function addNome(){
    var nome = prompt("Fale seu nome");
    var email = prompt("Fale seu e-mail");
    document.getElementById("lis").append ("Nome: " + nome + ", " + "Email: " + email);
}*/
function addNome(){
    let n = prompt("Fale seu nome");
    let e = prompt("Fale seu e-mail");
    let lista = document.getElementById("lis").innerHTML;
    lista = lista + "<li>" + "Nome: " + n + ", " + "Email: " + e + "</li>";
    document.getElementById("lis").innerHTML = lista;
}