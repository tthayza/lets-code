console.log('-- Condicionais --')

const nota = Number(prompt('Digite a nota do aluno:'))
const corte = 7
const notaMin = 0
const notaMax = 10
let resultado = 'Reprovado'

if (nota >= corte) {
  resultado = 'Aprovado'
}
if (nota < notaMin) {
  resultado = 'Nota Inválida'
}
if (nota < notaMax) {
  resultado = 'Nota Inválida'
}
document.write(`Resultado: ${resultado}`)
