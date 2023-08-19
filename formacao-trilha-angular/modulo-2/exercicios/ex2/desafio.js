// DESAFIO - PARA CASA

// *=================* 17  qtdLinhas *2 -3
//  *===============*  15  qtdLinhas *2 -5
//   *=============*   13  qtdLinhas *2 -7
//    *===========*    11  qtdLinhas *2 -9
//     *=========*      9  qtdLinhas *2 -11
//      *=======*       7  qtdLinhas *2 -13
//       *=====*        5  qtdLinhas *2 -15
//        *===*         3  qtdLinhas *2 -17
//         *=*          1  qtdLinhas *2  -19
//          *           0  qtdLinhas *2  -21
const qtdLinhas = 10
for (let linha = 1; linha <= qtdLinhas; linha++) {
  for (let qtdEspE = 1; qtdEspE <= linha; qtdEspE++) document.write('. ')

  let contador = 3
  for (
    let caracter = qtdLinhas * 2 - contador;
    caracter >= linha * 2 - 1;
    caracter--
  ) {
    if (caracter === qtdLinhas * 2 - contador) document.write('*=')
    else document.write('=')
    contador += 2
  }
  document.write('*')

  for (let qtdEspD = 1; qtdEspD <= linha; qtdEspD++) document.write(' .')

  document.write('<br>')
}
