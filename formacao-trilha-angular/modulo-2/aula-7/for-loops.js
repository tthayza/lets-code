console.log('-- FOR LOOPS --')

document.write('<h3>Imprimindo asteriscos </h3 <br>')

for (let i = 0; i < 5; i++) {
  document.write('* <br>')
}

document.write('<hr>')
/* Imprimir 10 asteriscos em cada linha um ao lado do outro, em 5 linhas. Exemplo:
 **********
 **********
 **********
 **********
 **********
 */

for (let linha = 1; linha <= 5; linha++) {
  for (let qtdAsteriscos = 1; qtdAsteriscos <= 10; qtdAsteriscos++) {
    document.write('*')
  }
  document.write('<br>')
}
document.write('<hr>')
/* Imprimir quantidade de asteriscos correspondentes a cada linha. Exemplo:
 *
 **
 ***
 ****
 *****
 ******
 *******
 ********
 *********
 **********
 */
for (let lin = 1; lin <= 10; lin++) {
  for (qtd = 1; qtd <= lin; qtd++) {
    document.write('*')
  }
  document.write('<br>')
}
