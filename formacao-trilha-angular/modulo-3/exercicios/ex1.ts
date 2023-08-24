class Circulo {
  raio:number
  area: number
  constructor(raio:number) {
    this.raio = raio
    this.area = 3.14*(this.raio * this.raio)
  }

  calcularArea() {
    return this.area
  }
}

const circle = new Circulo(4)
console.log(circle.calcularArea())

class Trapezio {
  baseMaior: number
  baseMenor: number
  altura: number
  area: number
  constructor(baseMaior:number, baseMenor:number, altura:number) {
    this.baseMaior = baseMaior
    this.baseMenor = baseMenor
    this.altura = altura
    this.area = ((baseMaior + baseMenor) * altura) / 2
  }

  calcularArea() {
    return this.area
  }
}

const trapeze = new Trapezio(20,10,50)
console.log(trapeze.calcularArea())

class Paralelogramo {
  base:number
  altura:number
  area: number
  constructor(base:number, altura:number) {
    this.base=base
    this.altura=altura
    this.area=base*altura

  }
  calcularArea() {
    return `A área do ${Paralelogramo.name} é de ${this.area}`
  }

}
const paralelogram = new Paralelogramo(50,20)
console.log(paralelogram.calcularArea())