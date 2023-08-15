console.log('-- Controle de Repetição --')

document.write('<h3> Números de 1 a 10 (um por linha)</h3>')

let num = 1
const limit = 10
while (num <= 10) {
  document.write(num, '<br>')
  num++
}

document.write('<hr>')

document.write('<h3> Números de 50 até 1 (separado por espaço)</h3>')

let numero = 50
let limite = 1

while (numero >= limite) {
  document.write(numero, ' ')
  numero--
}

document.write('<hr>')
document.write('<h3> Números pares entre 100 e 200(separado por um traço)</h3>')

numero = 100
limite = 200

while (numero <= limite) {
  if (numero % 2 === 0) {
    if (numero === 100) document.write(numero)
    else document.write(' - ', numero)
  }
  numero++
}
document.write('<hr>')

document.write('<h3> Números ímpares entre 99 e 1(separado por um traço)</h3>')

numero = 99
limite = 1
while (numero >= limite) {
  if (numero % 2 === 1) document.write(numero, numero != limite ? ' - ' : '')
  numero--
}

document.write('<hr>')

document.write('<h3> Sorteio</h3>')

// let chute = parseInt(prompt('Chute um número de 0 a 60'))

// while (chute != numGerado) chute = parseInt(prompt('Chute um número de 0 a 60'))
// let chute
// const numGerado = parseInt(Math.random() * 60)

// do {
//   console.log(numGerado)
//   chute = parseInt(prompt('Chute um número de 0 a 60'))
// } while (chute != numGerado)
// document.write('Você acertou!')

document.write('<hr>')
document.write('<h3> Números de 1 a 10 com For Loop</h3>')
for (let index = 1; index <= 10; index++) {
  document.write(index, ' ')
}
