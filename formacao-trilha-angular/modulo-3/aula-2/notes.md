# Conceitos de POO

## SuperClasse

- **super()** é utilizado quando há necessidade de customizar o constructor:
  - adicionando novos atributos
  - alterando inserindo um prefixo em determinado atributo
  - mudança de caracteres

## Modificadores de Acesso e Encapsulamento

- **protected**: acessível na própria classe e classes filhas somente;
- **private**: acessível somente dentro da classe;
- **default**: public;
- **readonly**, pode ser acessado fora da classe mas não pode ser alterado o valor, fornece somente leitura;

#### Encapsulamento são os `getters` e `setters` que controlam a visualização e edição de atributos privados.

## Extends x Implements

- `Extends` refere-se à herança
- Funciona somente com classe
- Classes só podem extender uma única classe

<br>

- `Implements` obriga a implementar um ou + método(s)
- Uso com interface, uma classe pode ter vários implements
- Interface dita regras que obriga a classe que a implementou a seguir tudo o que está dentro de interface
