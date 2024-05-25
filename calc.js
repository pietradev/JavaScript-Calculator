

//cleaning up the display
function limpar(){
    document.getElementById('resultado').innerHTML = "";
}

//removing the last input 
function voltar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length - 1);

}


function inserir(botao){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + botao;
}

function calcular(){
    var caixinha= document.getElementById('resultado').innerHTML;
    
    try{
        document.getElementById('resultado').innerHTML = eval(caixinha);
    }
    catch(Exception){
        document.getElementById('resultado').innerHTML = "...nada"
    }
       
    
}