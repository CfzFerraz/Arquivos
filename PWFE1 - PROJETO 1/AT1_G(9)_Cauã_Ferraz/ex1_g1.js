    let nm;
    let ac;
function botao(){
    nm = document.getElementById("n1").value;
    ac = document.getElementById("a1").value;

    if(ac >= 70){
        document.getElementById("acert").innerHTML = (nm + " você foi aprovado para a segunda fase!");
    }else if(ac >=50){
        document.getElementById("acert").innerHTML = (nm + " você foi aprovado para a primeira fase!");
    }else if(ac <=50){
        document.getElementById("acert").innerHTML = (nm + " você foi reprovado!");
    }
    document.getElementById("nm").innerHTML = "Nome: " + nm;
    document.getElementById("ac").innerHTML = "Acertos: " + ac;
}