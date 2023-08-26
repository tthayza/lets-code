const endereco = {
  rua: 'nome da rua',
  numero: 10
}

// const pessoa = {
//   "1":1,
//   endereco,
// }

const animal= new Object({nome: "cachorro"})

type Nome = string

type Pessoa = {
  nome: string,
  idade?:number,
}

function dizerOi(nome:Nome) {
  console.log('oi, meu nome é', nome)
}
const pessoa: Pessoa = {
  nome: 'Thayza',
}

const helloWorld = function (pessoa:Pessoa) {
  console.log(`${pessoa.nome} Hello World`)
  console.log(pessoa)
}

pessoa.idade = 24
helloWorld(pessoa)

delete pessoa.idade


helloWorld(pessoa)

type Operacao= () => string

const calc = (operacao:Operacao) => {
  console.log(operacao())
}


calc(() => "teste")