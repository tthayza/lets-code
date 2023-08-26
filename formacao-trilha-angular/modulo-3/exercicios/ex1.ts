class Circulo {
  raio:number
  area: number
  perimetro: number
  constructor(raio:number) {
    this.raio = raio
    this.area = 3.14*(this.raio * this.raio)
    this.perimetro = 2 * 3.14 * this.raio
  }

  calcularArea() {
    return `A área do ${Circulo.name} é de ${this.area}`
  }
  calcularPerimetro() {
    return `O perímetro do ${Circulo.name} é de ${this.perimetro}`
  }
}

const circle = new Circulo(4)
console.log(circle.calcularArea())
console.log(circle.calcularPerimetro())

class Trapezio {
  baseMaior: number
  baseMenor: number
  altura: number
  area: number
  ladoE: number
  ladoD: number
  perimetro: number
  constructor(baseMaior:number, baseMenor:number, altura:number, ladoE:number, ladoD: number) {
    this.baseMaior = baseMaior
    this.baseMenor = baseMenor
    this.altura = altura
    this.ladoD = ladoD
    this.ladoE = ladoE
    this.area = ((baseMaior + baseMenor) * altura) / 2
    this.perimetro = baseMaior + baseMenor + ladoD + ladoE

  }

  calcularArea() {
    return `A área do ${Trapezio.name} é de ${this.area}`
  }

  calcularPerimetro() {
    return `O perímetro do ${Trapezio.name} é de ${this.perimetro}`
  }

}

const trapeze = new Trapezio(20,10,50, 24,16)
console.log(trapeze.calcularArea())
console.log(trapeze.calcularPerimetro())

class Quadrado {
  lado: number
  area: number
  perimetro: number
  constructor(lado:number) {
    this.lado = lado
    this.area= lado *lado
    this.perimetro = lado *4
  }
  calcularArea() {
    return `A área do ${Quadrado.name} é de ${this.area}`
  }
  calcularPerimetro() {
    return `O perímetro do ${Quadrado.name} é de ${this.perimetro}`
  }
}
const paralelogram = new Quadrado(50)
console.log(paralelogram.calcularArea())
console.log(paralelogram.calcularPerimetro())