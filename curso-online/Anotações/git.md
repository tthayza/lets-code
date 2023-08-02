# GIT

#

### Estados dos arquivos no Git

- **untracked**:
  novo arquivo, que pode ser passado diretamente para área de stage.

- **unmodified:**
  arquivo mapeado que já foi para a área de stage e commitado.

- **modified:**
  arquivo mapeado que foi modificado.

- **staged:**
  área anterior ao commit, arquivos prontos para serem commitados.

#

### Comandos iniciais e principais

◼ **git status**: retorna tudo o que está acontecendo na branch atual.

**git add**: adiciona modificações na área de stage. Em seguida do add deve ser escrito o nome dos arquivos ou \* para todos.

◼ **git diff**: retorna as linhas dos arquivos da área de changes que foram modificadas, tanto acrescentadas na cor verde quanto deletadas na cor vermelha. Para ver mudanças na área de stage, basta acrescentar '--staged'.

◼ **git commit -m**: faz o commit, deve ser colocado em seguida o nome do commit entre um par de aspas

◼ **git log**: retorna o histórico de informações dos commits feitos

◼ **git restore + nome do arquivo**: descarta a última mudança feita no arquivo informado que está na área de modified ou changes. Para colocar um arquivo que está na área de staged para a área de modified ou changes, basta usar o mesmo comando adicionado '--staged' antes do nome do arquivo.

◼ **git push remote origin ~nome da branch~**: envia alterações commitadas para o repositório remoto

◼ **git pull**: traz o que tem no repositório remoto para o repositório local, fazendo um merge

◼ **git fetch**: traz quais alterações foram feitas no repositório remoto sem dar merge e atualizar automaticamente o arquivo. É possível dar 'git diff origin/~nome da branch~ para ver as linhas alteradas.

◼ **git log --oneline --decorate**: Mostra o log reduzido, é possível ver o histórico de commits e onde está o head atualmente.

◼ **git branch ~nome nova branch~**: para criar uma nova branch

◼ **git checkout ~nome da branch~**: sai da branch atual e vai para a branch que foi passada no comando.

◼ **git merge ~nome da branch~**: une a branch atual com a branch passada no comando
