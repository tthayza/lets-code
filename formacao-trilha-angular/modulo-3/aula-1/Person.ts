class Person {
  name: string
  age: number
  weight?: number

  constructor(name: string, age:number) {
    this.name = name
    this.age = age
  }

  static withWeight(name:string, age:number, weight:number): Person { //retorna instancia ou utilitario(metodo p validar o cpf da pessoa, n pertenceria a class Person)
    const person = new Person("Com peso", 18 )
    person.weight = weight
    return person
  }

}

const person = new Person("Thayza", 24)
const person2 = Person.withWeight("Tha", 24, 68)

console.log(person)

const queue:number[] = []
queue.push(1)
queue.push(2)
queue.push(3)
console.log(queue)

queue.unshift()
console.log(queue)

const stack:number[] = []
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack)
stack.pop()
console.log(stack)

