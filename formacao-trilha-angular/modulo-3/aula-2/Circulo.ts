// const Circulo1 = function () {
//   this.raio = 1
// }

// const Circulo2 = () => {}

// const teste = new Circulo1()

// console.log(teste)

interface CalcularFormas {
  resultado:number
  calcularArea():number
  mostrarNaTela():void
}


class Circulo1 implements CalcularFormas{
  raio:number
  resultado: number
  constructor(raio:number) {
    this.resultado=0
    this.raio = raio
  }
  calcularArea(): number {
    this.resultado = Math.PI * Math.pow(this.raio, 2)
    return this.resultado
  }
  mostrarNaTela(): void {
    if(this.resultado) console.log(`O resultado é ${this.resultado}`)
    else console.log('Sem resultado!')
  }
}

const circulo1 = new Circulo1(25)
circulo1.calcularArea()
circulo1.mostrarNaTela()

const circulo2 = new Circulo1(85)
circulo2.mostrarNaTela()

// class Quadrado1 implements CalcularFormas {
//   resultado: number

//   calcularArea(): number {

//   }
//   mostrarNaTela(): void {

//   }
// }