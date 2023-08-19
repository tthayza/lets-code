for (let i = 1; i <= 10; i++) {
  document.write(`<h4>Tabuada do ${i}</h4>`)
  for (let num = 1; num <= 10; num++) {
    document.write(`<p>${i} X ${num} =  <b>${num * i}</b></p>`)
  }
  document.write('<br>')
}
