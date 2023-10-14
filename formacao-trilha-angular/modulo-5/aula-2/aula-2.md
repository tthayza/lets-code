# Data Binding

De maneira simplificada significa comunicação, comunicação entre o template (HTML) e o código TypeScript (lógica de negócio).

Tal comunicação pode ocorrer de três formas:

- Dados do TypeScript para o template HTML (interpolação de string ou property binding);
- Dados do template para o TypeScript (event binding);
- Ou, ainda, combinando as duas formas anteriores (two-way-binding).

### Interpolação de string

Através da interpolação de string, podemos exibir no template qualquer valor que se resolva como uma string. Assim, podemos exibir, tanto o valor de uma variável, quanto o retorno de uma função que retorne uma string.

### Property Binding

Podemos alterar dinamicamente o comportamento dos elementos no template.
Atributo em uma tag HTML envolvida por colchetes indicam que está se referindo a uma Property Binding, ou seja, torna-se uma propriedade, que pode ter seu valor como uma variável, valor boolean ou o retorno de uma função (desde que esse retorno seja uma string).

- caso o valor seja uma variável ou retorno de uma função, esse será buscado no TS do component o valor dessa variável;

### Event Binding

Envia dados do template para o TS. No qual é possível emitir eventos que são realizados pelo usuário, onde se pode enviar determinados dados para manipulação no TS.
Para utilizar, basta indicar dentro de uma tag o nome do evento a ser disparado entre parênteses, e seu valor pode chamar uma função que foi declarada no TS do component.

### Constructor

É possível criar variáveis (não comuns) dentro do construtor, que tem por função chamar alguma API ou relacionada a estilo.
Geralmente, é posicionado entre as declarações das variáveis e as funções que são criadas.

Com o intuito de debugar o código e enxergar o que chega no HTML, utilizar a tag pre;

### ngModel

é uma diretiva utilizada para setar dado no html vindo do TS, pois seu valor deverá ser uma variável.

### Evento change

- No input o evento change é ativado quando é escrito algo e clicado fora do elemento.

### Eveneto blur

- ativado quando clica no elemento em que o blur está associado e logo após o click é feito fora do elemento. (independente se é digitado algo ou não)

### $event

objeto de evento em si

### @Input

é um property binding. Com a utilização do input é possível que um componente tenha contato com outro. Funciona de maneira similar às props do React.js

```js
  @Input() public variableName:type
```

Inicia-se o nome de uma propriedade no input que por default é public, no componente filho. E, na chamada do componente-filho, dentro de seu seletor é inserida essa propriedade e seu valor deve ser uma variável/retorno de função que deve estar armazenada no TS do componente-pai.
