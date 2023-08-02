# **HTML** 💀

#### Linguagem de marcação de hipertexto, versão 5 (2014) traz elementos semânticos.

- campo de texto pode ter `'readonly'` para marcar que o campo não pode ser alterado. Ou então, `'required'` que impede que ele seja enviado vazio.

- `<hr>` horizontal row, divisor em linha.

### **Formatação de textos**

**negrito**

- `<b></b>` para deixar o texto somente em negrito.
- `<strong></strong>` para além de negrito, semanticamente se refere a um texto de destaque/importância.

**itálico**

- `<i></i>` para formatar em itálico.
- `<em></em>` para enfatizar semanticamente determinada palavra.

**sublinhado**

- `<u></u>` usado em versões anteriores, evitar utilizar. Segundo a doc, recomendação de utilizar a propriedade text-decoration do CSS.

**riscado**

- `<s></s>` para definir um texto riscado.

**marcar texto**

- `<mark></mark>` para deixar o texto marcado, como um marca-texto.

**texto em código**

- `<pre></pre>` formata o texto para um código.

**texto em código inline**

- `<code></code>` formata uma palavra para código porém, de forma inline.

**para citação**

- `<blockquote></blockquote>` para formatar um texto que é uma citação, com recúo e altera a fonte.

**sobrescrito**

- `<sup></sup>` formata para a parte de cima da linha, geralmente utilizado para potências.

**subscrito**

- `<sub></sub>` formata para a parte de baixo da linha.

### **Estrutura Semântica**

- `<aside></aside>` barra/conteúdo lateral, variável.

- `<article></article>` para utilizar em estrutura de artigos, posts, etc. É possível utilizar as seguintes tags em seu interior para melhor estruturação semântica: header, main, footer.

- `<figure></figure>` semanticamente é melhor utilizá-la para envolver uma imagem.

- `<figcaption></figcaption>` para inserir uma legenda a uma imagem.

### **Tabelas no HTML**

- `<thead></thead>` define o cabeçalho da .
- `<tbody></tbody>` define o corpo da tabela.
- `<tr></tr>` define a linha na tabela.
- `<th></th>` define um dado na tabela, especialmente no cabeçalho.
- `<td></td>` define um dado na tabela.
- **rowspan** para mesclar linhas.
- **colspan** para mesclar colunas.
