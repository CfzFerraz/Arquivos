function blurFunction(){
    document.getElementById("myInput").style.background="red";
}
function myFunction(val){
    alert("mudou para " + val);
}
function loadFunction(){
    alert("Página Carregando!!!")
}
function mouseDown(){
    document.getElementById("myP").style.color = "red";
}
function mouseUp(){
    document.getElementById("myP").style.color = "green";
}
function coordenadasFigura(event){
    var x = event.clientX;
    var y = event.clientY;
    var escrita = "Coordenadas: (" + x + ", " + y + ",)";
    document.getElementById("demo3").innerHTML = escrita;
}
function clearCoor(){
    document.getElementById("demo3").innerHTML = null;
}