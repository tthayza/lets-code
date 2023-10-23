Output
é utilizado para que compartilhe uma propriedade com o componente-pai.

sua declaração:

```js
@Output() public nomePropriedade = new EventEmitter<type>()
```

para emissão:

this.nomePropriedade.emit(o que será mandado aqui)
