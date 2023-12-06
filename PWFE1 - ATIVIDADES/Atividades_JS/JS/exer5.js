function num(){
    let r1 = document.getElementById("saq").value;
    let r2 = r1%2;
    if(r2==0){
        document.getElementById("s1").innerHTML = "Resposta: " + r1 + " é par";
    }else{
        document.getElementById("s1").innerHTML = "Resposta: " + r1 + " é ímpar";
    }
}