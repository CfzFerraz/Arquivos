//abrir imagem particionada
var colunas = document.querySelectorAll(".coluna");
//ordem das imagens
var ordemCorreta = [
    "9.jpg",
    "8.jpg",
    "7.jpg",
    "6.jpg",
    "5.jpg",
    "4.jpg",
    "3.jpg",
    "2.jpg",
    "1.jpg",
];
//elementos arrastaveis
document.addEventListener("dragstart", (elem) => {
    elem.target.classList.add("arrastando");
})
document.addEventListener("dragend", (elem) => {
    elem.target.classList.remove("arrastando");
//chamando funçãopara confirmar quebr cabeça
    verificarOrdem();
})
//quando estiver sobre um lugar soltavel
colunas.forEach((coluna)=>{
    coluna.addEventListener("dragover", (elem) =>{
        coluna.classList.add("hover");
    })
})
//quando sair do lugar soltavel
colunas.forEach((coluna)=>{
    coluna.addEventListener("dragleave", (elem) =>{
        coluna.classList.remove("hover");
        var elemenoArrastado = document.querySelector(".arrastando");
        //inverter os elementos(troca delas)
       var filho = coluna.children[0];
       var colunaElementoArrastado = elemenoArrastado.parentElement;
       colunaElementoArrastado.appendChild(filho);
       coluna.appendChild(elemenoArrastado);
    });
});
//elementos iguais
function arraysIguais(arr1, arr2){
    if(arr1.length !== arr2.length) return false;
    for(var i = 0; i < arr1.length;i++){
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}
//verificar se os vetores estão na ordem correta
function verificarOrdem(){
    var imagensAtuais = [];
    colunas.forEach((coluna) => {
        var parte = coluna.querySelector("img");
        if(parte){
            imagensAtuais.push(parte.src.split("/").pop());
        }
        console.log(imagensAtuais);
        console.log(ordemCorreta);
    });
}
//sortear aleatoriamente as imagens
function sortearImagem(){
    var numeros = [];
    for(let i = 1; i <= 9; i++){
        var aleatorio = Math.ceil(Math.random()*(9-0) + 0); // 0 é exclusivo
        while(numeros.includes(aleatorio)){
            aleatorio = Math.ceil(Math.random()*(9-0) + 0);
        }
        numeros.push(aleatorio);
        var parte = document.getElementById("parte" + i);
        parte.src = "img/" + aleatorio + ".jpg";
        console.log(aleatorio);
    }
    verificarOrdem();
}
sortearImagem();