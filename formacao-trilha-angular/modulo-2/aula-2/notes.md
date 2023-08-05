<h1>Anotações - AULA 2</h1>

<h2>Entendendo as diferenças entre <i>var</i>, <i>let</i> e <i>const</i></h2>

<p>Primeiramente, é válido dizer que toda linguagem de programação segue alguns padrões, o JavaScript (criado em setembro de 1995) não diferentemente segue os padrões estabelecidos pelo EcmaScript 6 atualmente, desde junho de 2015, e que trouxe algumas features, e uma delas foi o prefixo de variáveis que são var, let e const. </p>

<p>Para tanto, é importante ressaltar que, quando uma variável é declarada é criado um espaço na memória, então quando uma variável é redeclarada ocorre a recriação de um espaço na memória. Sendo assim, esse é o tipo de comportamento indesejado na programação. Dito isso, confira na tabela abaixo o comportamento de cada tipo de prefixo.</p>

| var                                 | let                                 | const                                   |
| ----------------------------------- | ----------------------------------- | --------------------------------------- |
| pode ser redeclarada ✔              | não pode ser redeclarada ✖          | não pode ser redeclarada ✖              |
| reatribuição de valor é permitida ✔ | reatribuição de valor é permitida ✔ | reatribuição de valor não é permitida ✖ |

<hr>

<h2>O que são funções?</h2>
<p>Funções são estruturas que existem dentro da programação para que possam ser criadas instruções. Dentro das chaves de forma declarativa, são colocadas linhas de código a serem executadas dada sequência a ser fornecida. Lembrando que, para executar uma função basta escrever o nome da mesma com um par de parênteses em seguida: <b>nomeFuncao()</b> </p>

<h3> Tipos de Funções</h3>

<h4>Função Nomeada</h4>

```javascript
function nome() {}
```

<h4>Função Anônima</h4>
<p> ❗ Esse tipo deve estar dentro de uma variável para que possa ser identificada de alguma maneira </p>

```javascript
const nome = function () {}
```

<h4>Arrow Function</h4>

```javascript
const nome = () => {}
```
