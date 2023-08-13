console.log('-- Notas --')

const nota = Number(prompt('Digite a nota do aluno:'))
let resultado = 'Nota inválida!'

if (nota >= 0 && nota < 5) {
  resultado = 'Reprovado'
} else if (nota >= 5 && nota < 7) {
  resultado = 'Recuperação'
} else if (nota >= 7 && nota <= 10) {
  resultado = 'Aprovado'
}
document.write(`Nota: ${nota}`)
document.write(`Resultado: ${resultado}`)
