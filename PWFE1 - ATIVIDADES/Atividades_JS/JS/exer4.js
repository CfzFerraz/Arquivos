function notas(){
    let saque = document.getElementById("saq").value;
    let n100 = 0;
    let n50 = 0;
    let n10 = 0;
    do{
        if(saque >= 100){
            n100 = n100 +1;
            saque = saque - 100;
        }else if(saque >= 50){
            n50 = n50 +1;
            saque = saque - 50;
        }else if(saque >= 10){
            n10 = n10 +1;
            saque = saque - 10;
        }else{
        alert ("Não é possível realizar o saque, favor se direcionar para outro caixa");
        break;
        }
    }while(saque != 0);
    document.getElementById("s1").innerHTML = ("Notas de R$ 100: " + n100);
    document.getElementById("s2").innerHTML = ("Notas de R$ 50: " + n50);
    document.getElementById("s4").innerHTML = ("Notas de R$ 10: " + n10);
}