var inputGasolina = document.getElementById("gasolina")
var inputEtanol = document.getElementById("etanol")

function calcular(){
    gasolina = inputGasolina.value
    etanol = inputEtanol.value

    if (etanol < 0.7 * gasolina){

        return document.getElementById("imagem").src = "./imagens/etanol.png"
    }

    else{

        return document.getElementById("imagem").src = "./imagens/gasolina.png"
    }
      
}

function limpar(){

    document.getElementById("imagem").src = "./imagens/neutro.png"

}