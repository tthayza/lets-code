console.log('\n -- FUNÇÕES -- ')

function saudacao(nome = '', sobrenome = '') {
  var mensagem = `Boa noite, ${nome} ${sobrenome}`
  return mensagem
}

var saida1 = saudacao()
var saida2 = saudacao('Thayza')
var saida3 = saudacao('Thayza', 'Oliveira')

console.log('Saída 1:', saida1)
console.log('Saída 2:', saida2)
console.log('Saída 3:', saida3)
