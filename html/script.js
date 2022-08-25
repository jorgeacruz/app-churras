

var inputAdultos = document.getElementById("adultos");
var inputCriancas = document.getElementById("criancas");
var inputDuracao = document.getElementById("duracao");

var resultado = document.getElementById("resultado");

function calcular() {
  console.log("calculando...");

  var adultos = inputAdultos.value;
  var criancas = inputCriancas.value;
  var duracao = inputDuracao.value;
  
  var qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) * criancas);
  var qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) * criancas);
  var qtdTotalCerveja = cervejaPP(duracao) * adultos;
  console.log(qtdTotalCarne);

  resultado.innerHTML  = `<p>${qtdTotalCarne / 1000 }g de carne` //kilo de carne
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355) }Latas de Cerveja` //latas de 355
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000) }Garrafas de Bebida` //pet 2l de refri
}

function carnePP () {
  var carne = 400;
  if(carne >= 6){ 
    return 650; 
  } else { 
    return 400; 
  }
}
function cervejaPP () {
  var carne = 400;
  if(carne >= 6){ 
    return 2000; 
  } else { 
    return 1200; 
  }
}
function bebidasPP () {
  var carne = 400;
  if(carne >= 6){ 
    return 1500; 
  } else { 
    return 1000; 
  }
}
