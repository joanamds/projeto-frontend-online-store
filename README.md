# :convenience_store: FrontEnd Online Store! :convenience_store:

Este foi o nosso primeiro trabalho em grupo do módulo de front-end! Foi um trabalho em que colocamos as metodologias ágeis em prática, utilizando a ferramenta Trello para organizar os requisitos. 
Nos organizamos em pair programming e fizemos o trabalho inteiro em duplas ou em trios. Abrimos uma branch por requisito em seguida abríamos um pull request e aguardávamos code review de outros membros para aprovar e dar um merge na nossa branch principal. 

## Técnologias usadas

Front-end:
> Desenvolvido usando: React, CSS3, HTML5, ES6

### Mas do que se trata a front-end online store? 
Precisamos desenvolver uma loja online alimentada pela API do mercado livre. Onde seria possível para o cliente filtrar os produtos por categoria, pesquisar na barra de pesquisa, adicionar, remover e alterar a quantidade do produto no carrinho e em seguida finalizar a compra em uma página de checkout. 

### Endpoints da API
<li>Para listar as categorias disponíveis: https://api.mercadolibre.com/sites/MLB/categories </li>
<li>Para buscar itens por termo: https://api.mercadolibre.com/sites/MLB/search?q=${valor-da-busca} </li>
<li>Para buscar itens por categoria: https://api.mercadolibre.com/sites/MLB/search?category=${id-da-categoria} </li>
<li>Para buscar itens de uma categoria por termo: https://api.mercadolibre.com/sites/MLB/search?category=${id-da-categoria}&q=${valor-da-busca}</li>
<li>Para buscar detalhes de um item específico: https://api.mercadolibre.com/items/${id-do-produto}

### Estilização 
Em grupo nós não fizemos nenhuma estilização. Mas para aprendermos melhor CSS foi sugerido para que cada membro do grupo criasse uma branch com o seu nome e desenvolvesse o CSS da maneira como quisesse. 
Eu resolvi pegar a paleta de cores do site do Mercado Livre e fiz uma estilização baseada no site do Mercado Livre, já que utilizamos uma API do mesmo. 

[Clique aqui para ver a aplicação](https://joanamds.github.io/projeto-frontend-online-store/)
  
![frontend online store](https://user-images.githubusercontent.com/106452876/208461110-1e187651-5870-42bb-aec0-b122644d19ae.gif)

## Instalando Dependências
> Frontend
```bash
cd src/
npm install
``` 
## Executando aplicação
* Para rodar o front-end:

  ```
    cd src/ && npm start
  ```

## Executando Testes

* Para rodar todos os testes:

  ```
    npm test
  ```

<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto no qual você pode customizar e reutilizar todas as vezes que for executar o trybe-publisher.

Para deixá-lo com a sua cara, basta alterar o seguinte arquivo da sua máquina: ~/.student-repo-publisher/custom/_NEW_README.md

É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
