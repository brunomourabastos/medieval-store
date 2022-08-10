# medieval-store

API Node, no padrão REST, construída utilizando o Typescript com base no diagrama entidade relacionadomento que se encontra na pasta ./images.

Desenvolvido um CRUD (Create, Read, Update e Delete) de itens medievais, no formato de uma API, utilizando Typescript.

Endpoints criados para ler e escrever em um banco de dados, utilizando o MySQL.

Desenvolvido todas as camadas da aplicação (MSC) e, por meio dessa aplicação, é possível realizar as operações básicas (CRUD) que se pode fazer em um determinado banco de dados:

Endpoints criados para ler e escrever em um banco de dados utilizando o MySQL

## Tecnologias usadas

Back-end:
> Desenvolvido usando: NodeJS, Express.JS, MySql2, TypeScript

## Informações importantes sobre o projeto

  - A pessoa usuária, independente de cadastro, consegue:
    - Adicionar, ler, deletar e atualizar produtos;
    - Enviar vendas para o sistema e essas vendas devem validar se o produto em questão existe;
    - Ler, deletar e atualizar vendas.

  - Cada camada da API está no seu respectivo diretório:
    - A camada **Models** está no diretório de nome `models`;
    - A camada **Services** está no diretório de nome `services`;
    - A camada **Controllers** está no diretório de nome `controllers`;

Para criar e povoar o banco de dados, utilizar o arquivo `MedievalStore.sql`.

## Instalando Dependências

Para clonar:

```
git clone git@github.com:brunomourabastos/medieval-store.git
```

> Backend
```
cd medieval-store/ 
npm install
docker-compose up -d (precisa ter o docker instalado)
``` 

## Executando aplicação

* Para rodar o back-end:

  ```
  cd medieval-store/ && npm start
  ```

