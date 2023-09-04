abstract class Forma {
  calcularArea(): number {
    return 1
  }
}

class Circulo extends Forma {
  raio: number
  constructor(raio: number) {
    super()
    this.raio = raio
  }
  calcularArea(): number {
    return Math.PI * Math.pow(this.raio, 2)
    throw new Error("Method not implemented")
  }
}

class Retangulo extends Forma {
  largura: number
  altura: number
  constructor(largura: number, altura: number) {
    super()
    this.largura =largura
    this.altura = altura
  }
  calcularArea(): number {
    return this.altura * this.largura
  }
}

function calcularAreaTotal(formas: Forma[]) {
  let areaTotal = 0
  for(const forma of formas) {
    areaTotal+= forma.calcularArea()
  }

  return areaTotal
}

const circulo = new Circulo(5)
const retangulo = new Retangulo(3,4)
const area = calcularAreaTotal([circulo, retangulo])

console.log(area)