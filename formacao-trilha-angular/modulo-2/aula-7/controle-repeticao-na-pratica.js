console.log('-- Controles de Repetição Na Prática -- ')

console.log(pessoa)
console.log(carros.constructor)
console.log(carros.length)
carros.push('Fox')
console.log(carros.length)

document.write('<h3>Exibindo elementos com While</h3>')
let i = 0
while (i < carros.length) {
  document.write(carros[i] + '<br>')
  i++
}

document.write('<hr>')

document.write('<h3>Exibindo elementos com For Loop</h3>')
for (let index = 0; index < carros.length; index++) {
  document.write(carros[index], '<br>')
}
document.write('<hr>')

document.write('<h3>Exibindo elementos com For Of</h3>')
for (const carro of carros) {
  document.write(carro, '<br>')
}

document.write('<hr>')

document.write('<h3>Exibindo elementos com For In</h3>')
for (const index in carros) {
  if (Object.hasOwnProperty.call(carros, index)) {
    const element = carros[index]
    document.write(element, '<br>')
  }
}
document.write('<hr>')
// document.write(pessoa.dev)
console.log(pessoa)

for (const key in pessoa) {
  if (Object.hasOwnProperty.call(pessoa, key)) {
    const element = pessoa[key]
    document.write(element, '<br>')
  }
}

document.write('<hr>')
// concessionaria.forEach((veiculo) => {
//   for (const key in veiculo) {
//     if (Object.hasOwnProperty.call(veiculo, key)) {
//       const element = veiculo[key]
//       document.write(element, '<br>')
//     }
//   }
//   document.write('<br>')
// })

concessionaria.forEach(function (carro) {
  document.write(`${carro.marca}  ${carro.modelo} - ${carro.ano}  <br>`)
})

document.write('<br>')

concessionaria
  .filter(function (carro) {
    return carro.ano > 2020
  })
  .forEach(function (carro) {
    document.write(`${carro.marca}  ${carro.modelo} - ${carro.ano}  <br>`)
  })
