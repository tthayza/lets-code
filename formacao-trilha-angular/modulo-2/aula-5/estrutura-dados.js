console.log('-- Estrutura de Dados --')

// carros = ['Celta, Gol, Uno']

const pessoa = {
  nome: 'Thayza',
  idade: 24,
  dev: true,
  sexo: 'F'
}

const carros = new Array('Gol', 'Palio', 'IX35', 'Tucson', 'Marea')
carros.push('Ferrari') // add no final array
carros.unshift('Fusca') // add no inicio array
carros.splice(2, 0, 'Uno') // add na posicao especifica
carros.splice(3, 1, 'Corsa') // substitui na posicao especifica
carros.splice(1, 1) // remove na posicao especifica
carros.pop() // remove o ultimo elemento
carros.shift() // remove o primeiro elemento
carros.sort() // ordenar (alfabeticamente)
carros.reverse() // inverter

const car = {
  marca: 'Chevrollet',
  cor: 'vermelho',
  ano: 1997,
  modelo: 'Vectra',
  placas: 'XBC-8915',
  portas: 2,
  combustivel: 'G',
  acessorios: ['bancos de couro', 'aerofolio', 'turbo', 'rebaixado', 'radio'],
  oKM: false,
  localidade: {
    cidade: 'Rio de Janeiro',
    uf: 'RJ'
  }
}
const concessionaria = [
  {
    marca: 'Chevrollet',
    cor: 'vermelho',
    ano: 1997,
    modelo: 'Vectra'
  },
  {
    marca: 'Fiat',
    cor: 'preto',
    ano: 2025,
    modelo: 'Palio'
  },
  {
    marca: 'VW',
    cor: 'preto',
    ano: 2012,
    modelo: 'Fox'
  }
]
