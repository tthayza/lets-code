# <h1 align="center"> **Programando para Web utilizando JavaScript** </h1>

<p>Quando o assunto é programação web, logo pensa-se em 3 linguagens principais com diferentes usos: <p>

- Lingugagem para marcação, organiza a camada de informação por meio de tags HTML.
- Linguagem para formatação, organiza a camada de estilo através de seletores no CSS.
- Linguagem para programação, organiza a camda de funcionalidades por meio do JavaScript.

<h2> Sobre JavaScript </h2>
<p> Os códigos escritos em Javascript são lidos e executados em tempo de execução (<em>runtime</em>), e o browser se torna responsável por ler e interpretar código JS que foi desenvolvido. O JavaScript nasceu principalmente voltado para trabalhar dentro do ambiente do navegador, trazendo a camada aos usuários de comportamento (submetidos por eventos, interatividade). Ou seja, uma página web possui mapeamentos que executam eventos por meio de códigos escritos em JS. Sendo assim, o JavaScript é a tecnologia que entende o comportamento do usuário e endereça isso para a solução desenvolvida pelo programador no código JS. Trazendo, dessa forma, a interatividade para a página, no qual HTML e CSS são limitantes. </p>

<p>É uma linguagem que ao longo dos anos ganhou determinado favoritismo pelos programadores, e alguns anos atrás foi concebida uma ideia, um motor que faz com que os códigos escritos em JavaScript funcionem fora do navegador, ou seja, em linhas de comando que é o Node.JS. </p>

<hr>

<h2> Mas, como utilizar o JavaScript em minhas páginas? </h2>
<h3><b>Script Inline</b> - código javascript diretamente nas tags html </h3>
<p>Para gerar eventos em JS de maneira simplificada, basta digitar dentro da tag html 'on' e o VS code irá sugerir uma série de eventos, e o valor desse evento deve ser um código JS.</p>

```HTML
<button onclick="alert('oi')"> Clique aqui! </button>
```

<p>⚠ <b>OBS: </b>o evento <em>onload</em> nao depende de interação por parte do usuário, é um evento que é executado automaticamente ao instante em que a página é carregada. </p>

#

<h3><b>Script Embed </b> - tag específica de nome 'script'</h3>
<p> Além da maneira inline, é possível também utilizar a tag script para armazenar o código JS. Como no exemplo abaixo:</p>

```HTML
<script> codigoAqui= "Entre as tags de abertura e fechamento script, deve estar organizado o código JavaScript" </script>
```

#

<h3><b>Script External </b></h3>
<p> A terceira maneira de utilizar JavaScript em uma página web é através de um arquivo externo <b>.js</b>. Para isso, utiliza-se a tag <em>script</em> com atributo <em>src</em> no arquivo HTML que carrega o arquivo externo JS, seu valor deve ser o nome do arquivo JS. Da seguinte forma:</p>

```HTML
<script src="arquivo.js"> </script>
```

<hr>

<h2> Variáveis </h2>

- É um espaço reservado na memória para armazenar informações;
- Todas as variáveis são prefixadas com as seguintes palavras-chave: <b>var, let, const</b>

  `[prefixo aqui] chave = valor `

```javascript
var chave = valor
let chave = valor
const chave = valor
```
