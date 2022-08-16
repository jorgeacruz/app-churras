

var inputAdultos = document.getElementById("adultos");
var inputCriancas = document.getElementById("criancas");
var inputDuracao = document.getElementById("duracao");

var resultado = document.getElementById("resultado");

function calcular() {
  console.log("calculando...");

  var adultos = inputAdultos.value;
  var criancas = inputCriancas.value;
  
  var qtdTotalCarne = 400 * adultos + (400/2 * criancas);
  console.log(qtdTotalCarne);
}

function carnePP () {
  var carne = 400;
  if(carne >= 6){
    carne = 650
  }
}