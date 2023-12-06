/*function myFunction() {
    alert('OLA')
}
var myVar = setInterval (myTimer , 100);
function myTimer(){
    var d = new Date();
    document.getElementById("demo1").innerHTML = d.toLocaleDateString();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();

    var hoje, prazo;
    hoje = new Date();
    prazo = new Date();
    var dia = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    document.write("<p>Hoje é: " + dia[hoje.getDay()] + ", " + "Dia: "+ hoje.getDate() + "/" +
    hoje.getMonth() + "/" + hoje.getFullYear() + " Hora: " + (hoje.getHours()) + ":" + 
    (hoje.getMinutes()) + ":" + (hoje.getSeconds()) +"</p>")
}*/
/*function mostrarHora(){
   let d = Date();
    document.body.innerHTML = "Dia: " + d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear();
    document.body.innerHTML = "Hora: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
mostrarHora();
function Hora(){
    const tempo = new Date();
    const hr = tempo.getHours();
    const min = tempo.getMinutes();
    const seg = tempo.getSeconds();
    console.log(`Hora ${hr} : ${min} : ${seg}`);
    document.body.innerHTML = `Hora ${hr} : ${min} : ${seg}`;
    setInterval(Hora, 100);
}
Hora();*/
function myFunction(){
    document.body.style.backgroundImage = "url(img/s4.png)";
}