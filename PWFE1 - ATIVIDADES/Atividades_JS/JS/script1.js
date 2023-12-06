var pessoas = ["Maria", "José", "Carlos", "Ana"];
var objetos = ["Garfo", "Colher"];
var frutas = ["Uva", "Maça", "Abacaxi"];
pessoas[0];   //representa maria
pessoas.length;   //resultado igual a 4
objetos[objetos.length] = "Faca";   //para add elementos ao arry
frutas.indexOf("Uva");  //resultado 0
console.log(pessoas);
console.log(objetos);
console.log(frutas);
var motos = ["S1000", " B-King", " H2r", " Hornet", " XJ6", " Fazer600", " R1"];
motos[0];
motos[motos.length] = " XT660";
motos[motos.length] = " R6";

document.write("<br>Lista: ", motos);
document.write("<br>Num de motos da lista: ", motos.length);
document.write("<br>Primeira moto: ", motos[0]);
    var d = new Date("October 14, 2014 11:13:00");
        document.getElementById("D1").innerHTML = d;
    d= new Date (0);
        document.getElementById("D2").innerHTML = d;
    var d = new Date(99, 5, 24, 11, 33, 30, 0);
        document.getElementById("D3").innerHTML = d;
        //o mês vai de 0 (janeiro) a 11 (dezembro)
    var d = new Date(2014, 7, 20); //20 de agosto de 2014
        document.getElementById("D4").innerHTML = d;
        d = new Date();
        document.write("<br>" + d.toUTCString());
        document.write("<br>" + d.toDateString());
        document.write("<br>" + d.toLocaleDateString());
        document.write("<br>" + d.toLocaleTimeString('pt -PT', {hour12: false}));
    var hoje, prazo;
    hoje = new Date();
    prazo = new Date();
    
    prazo.setFullYear(2023, 10, 28);
    var dia = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    document.write("<p>Hoje é: " + dia[hoje.getDay()] + ", " + hoje.getDate() +
     "/" + (hoje.getHours()) + "/" + hoje.getFullYear() + "</p>")

     document.write("<p>O prazo é: " + dia[prazo.getDay()] + ", " + prazo.getDate() +
     "/" + (prazo.getHours()) + "/" + prazo.getFullYear() + "</p>")
     try{
        var x;
        
        if(x == "") throw "vazio";
        if(isNaN(x)) throw "não é um numero";
        if(x == 10) throw x;
        console.log(x);
        document.write(x);
     }catch(err){
        console.log("Input is " + err);
        document.write("Input is " + err);
     }
    var dividendo = 10;
    var divisor = 0;

    try{
        if(divisor == 0){
            throw new
            Error("Erro: Divisão por zero não é permitida")
        }
        var resultado = dividendo/divisor;
        console.log("Resultado: ", resultado);
    }catch(err){
        console.log(err.message);
    }
    function myFuncton(){
        var message, x;
        message = document.getElementById("message");
        message.innerHTML = "";
        x = message = document.getElementById("demo").value;
        try{
            if(x == "") throw "empty";
            if(isNaN(x)) throw "not a number";
            x = Number(x);
            if(x < 5)throw "too low";
            if(x > 10)throw "too high";
        }
        catch(err){
            message.innerHTML = "Input is" + err;
        }
    }
    try{
        adddlert("ERRO!!!")
    }catch(err){
        document.write("<br> " + err.message);
    }finally{
        document.write("<br>Será mostrado mesmo com o Erro");
    }