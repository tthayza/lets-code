const calcularImc = () => {
  const peso = Number(document.getElementById('input-peso').value)
  const altura = Number(document.getElementById('input-altura').value)
  const resultadoImc = document.getElementById('resultado-imc')
  const imc = (peso / (altura * altura)).toFixed(2)

  document.getElementById('input-imc').value = imc

  if (peso <= 0 || altura <= 0) {
    resultadoImc.textContent = 'Dados Inválidos!'
  } else if (imc < 18.5) {
    resultadoImc.textContent = `Você está abaixo do peso!`
  } else if (imc <= 24.9) {
    resultadoImc.textContent = `Você está no peso ideal!`
  } else if (imc <= 29.9) {
    resultadoImc.textContent = `Você está com sobrepeso!`
  } else if (imc <= 34.9) {
    resultadoImc.textContent = `Você está com obesidade grau I!`
  } else if (imc <= 39.9) {
    resultadoImc.textContent = `Você está com obesidade grau II!`
  } else {
    resultadoImc.textContent = `Você está com obesidade grau III!`
  }
}
