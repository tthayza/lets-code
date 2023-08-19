console.log('-- For Each --')

document.write('<h2>Utilizando For Each </h2>')
// Array Literal
const carrinho = []

const celular = {
  nome: 'celular',
  marca: 'Apple',
  modelo: 'Iphone X',
  preco: 5000.0,
  quant: 3
}
const notebook = {
  nome: 'notebook',
  marca: 'Sony',
  modelo: 'Vaio',
  preco: 3500.0,
  quant: 5
}

carrinho.push(celular)
carrinho.push(notebook)

console.table(carrinho)

document.write('<h3>Produtos no Carrinho </h3')
carrinho.forEach((produto, index) =>
  document.write(` <br>${index} - ${produto.marca} ${produto.modelo} <br> `)
)

document.write('<hr>')
console.log('-- Map --')
document.write('<h2>Utilizando Map </h2>')

carrinho.map((produto, index) => {
  document.write(` <br>${index} - ${produto.marca} ${produto.modelo} <br> `)
})

console.log(
  carrinho.map((produto, index) => {
    const { nome, marca, quant, modelo, preco } = produto
    // return {
    //   nome,
    //   marca,
    //   preco,
    //   quant,
    //   total: quant * preco
    // }
    return {
      ...produto,
      total: quant * preco
    }
  })
)

document.write('<hr>')
console.log('-- Filter --')
document.write('<h2>Utilizando Filter </h2>')

console.table(
  carrinho.filter((item, index) => {
    return item.quant > 3
  })
)

const qtdTotal = carrinho.reduce(function (acc, current) {
  console.log(acc, current.quant)
  return acc + current.quant
}, 10)
console.log(qtdTotal)

const qtdEstoque = carrinho.reduce((acc, current) => {
  return acc + current.preco * current.quant
}, 0)
console.log(qtdEstoque)
