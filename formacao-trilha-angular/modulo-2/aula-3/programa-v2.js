console.log('-- Segundo programa rodando --')

const transformText = () => {
  let name = document.getElementById('input-name').value
  document.getElementById('result').textContent = name.toUpperCase()
}
