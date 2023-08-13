console.log('-- Calculadora rodando --')

const calcular = function () {
  console.log('vai calcular')
  const n1 = Number(document.getElementById('first-operator').value) || 0
  const n2 = Number(document.getElementById('second-operator').value) || 0
  const operator = document.getElementById('operations').value
  let total = 0
  // const itemSelected =
  //   document.getElementById('operations').options.selectedIndex
  // const operator =
  //   document.getElementById('operations').options[itemSelected].value
  switch (operator) {
    case 'add':
      total = n1 + n2
      break
    case 'sub':
      total = n1 - n2
      break
    case 'mul':
      total = n1 * n2
      break
    case 'div':
      total = n1 / n2
      break
    case 'pot':
      total = n1 ** n2
      break

    default:
      break
  }

  document.getElementById('result').value = total
  console.log(operator)
}
