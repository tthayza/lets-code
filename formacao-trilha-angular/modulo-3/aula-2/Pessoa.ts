// class Carro {
//   public velocidade:number;
//   injecao: string


//   acelerar() {
//     this.velocidade++
//     console.log(`acelerou com a potência: ${this.velocidade}`)
//   }
// }

// class Gol extends Carro {
//   desacelerar() {
//     this.velocidade--
//     console.log(`desacelerou com a potência: ${this.velocidade}`)
//   }
// }

// const carro = new Carro()
// const gol = new Gol()

// carro.velocidade = 10
// gol.velocidade = 5

class Pessoa1 {
  private nome:string
  readonly idade: number
  protected estaViva:boolean
  constructor(nome:string, idade:number, estaViva:boolean){
    this.nome=nome
    this.idade=idade
    this.estaViva=estaViva
  }
  getNome() {
    return this.nome
  }
  setNome(nome:string) {
    this.nome=nome.toLowerCase()
    return this.nome
  }

  getEstaViva() {
    return this.estaViva
  }


}

class PessoaJuridica extends Pessoa1 {
  cnpj: number

  constructor(nome:string, idade:number, estaViva:boolean, cnpj:number) {
    super(nome, idade, estaViva)
    this.cnpj=cnpj
  }
}

const person = new Pessoa1("Thayza", 24, true)
person.getNome()

const pj = new PessoaJuridica("Tha", 24, true, 4987498749874966)
