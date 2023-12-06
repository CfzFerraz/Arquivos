function limpa_form(){
document.getElementById('Rua').value = ("");
document.getElementById('Bairro').value = ("");
document.getElementById('Cidade').value = ("");
document.getElementById('Estado').value = ("");
}
function atualiza_campos(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById('Rua').value = (conteudo.Rua);
        document.getElementById('Bairro').value = (conteudo.Bairro);
        document.getElementById('Cidade').value = (conteudo.Cidade);
        document.getElementById('Estado').value = (conteudo.Estado);
    }else{
        limpa_form();
        alert("CEP não foi encontrado!");
    }
}
function pesquisacp(valor){//variavel cep consegue valores decimais(inteiros)
    var cep = valor.replace(/\D/g,'');
    //condição de validação
    if(cep != ""){
        var validacep = /^~[0-9]{8}$/;
        //valida o formato do CEP
        if(validacep.test(cep)){
            document.getElementById('Rua').value = ("carregando...");
            document.getElementById('Bairro').value = ("carregando...");
            document.getElementById('Cidade').value = ("carregando...");
            document.getElementById('Estado').value = ("carregando...");
            //criou no(elemento)
            var elemento = document.createElement('script');
            //add info p/ o no elemento
            elemento.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=atualiza_campos';
            //insere script no documento e carrega seu conteudo
            document.body.appendChild(elemento);
        }else{
            limpa_form();
            alert("Formato de CEP invalido");
        }
        }else{
            limpa_form();
        }
    };