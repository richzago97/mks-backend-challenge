# Desafio Back-end MKS

Este repositório é parte do desafio para a vaga de back-end na MKS Desenvolvimento de Sistemas e Empreendimentos Ltda.

## Sobre o Desafio

O desafio proposto envolve a criação de um sistema de autenticação JWT e uma API CRUD para um catálogo de filmes. As ferramentas e tecnologias utilizadas incluem TypeScript, Nest.js, TypeORM, Swagger, Docker, PostgreSQL e Redis.


## Considerações durante o desenvolvimento do projeto

Este desafio foi uma verdadeira imersão no mundo do Nest.js e do Redis, tecnologias que, até então, eram território desconhecido para mim. Apesar da falta de experiência prévia, mergulhei de cabeça e descobri o quão fascinantes e poderosas essas ferramentas podem ser.

Apesar de ter embarcado nessa jornada com pouco conhecimento, dediquei-me intensamente ao aprendizado e ao desenvolvimento das funcionalidades solicitadas. Em um curto espaço de tempo, fui capaz de implementar as features requisitadas, o que me proporcionou uma incrível oportunidade de aprendizado.

Gostaria de expressar meu entusiasmo e agradecimento pela oportunidade oferecida pela equipe da MKS Desenvolvimento. Aprendi imensamente durante este processo e estou animado com a perspectiva de contribuir com a equipe.

No entanto, durante o processo de deploy, um desafio me confrontou: ao realizar a requisição de todos os filmes na área de produção, mesmo após criar a chave `listAllMovies` com sucesso verificando com `redis-cli` utilizando o comando `KEYS *`, não obtive o retorno esperado. Apesar de ter resolvido muitos desafios durante o desenvolvimento, este ponto específico persiste. Adoraria discutir essa questão com a equipe durante o processo de avaliação, compartilhando o que aprendi e buscando soluções conjuntas.

Estou entusiasmado com a possibilidade de trazer minha energia e aprendizado para o time da MKS Desenvolvimento. Agradeço novamente pela oportunidade e estou à disposição para discutir mais sobre esse desafio e minhas experiências.

### Estrutura do Projeto

O projeto está organizado da seguinte maneira:

```
|-- dist
|-- node_modules
|-- pgdata
|-- src
    |-- auth
    |-- movies
    |-- redis
    |-- user
|-- test
|-- .env
|-- .env.example
|-- ...
```

### Funcionalidades Implementadas

- **Autenticação JWT:** Implementada a autenticação JWT para proteger os endpoints da API.
- **CRUD de Filmes:** Criados endpoints para criar, listar, atualizar e excluir filmes.


### Instalação e Execução

1. **Requisitos:**
   - Node.js
   - Nest.js
   - Docker
   - PostgreSQL
   - Redis

2. **Passos para Execução Local:**
   - Clone este repositório.
   - Instale as dependências com `yarn install` ou `npm install`.
   - Copie o arquivo `.env.example` e renomeie para `.env`.
   - Preencha as variáveis de ambiente no arquivo `.env`. Exemplos:
     ```plaintext
     POSTGRES_HOST=localhost
     POSTGRES_DB_PORT=5432
     POSTGRES_USER=seu_usuario
     POSTGRES_PASSWORD=sua_senha
     POSTGRES_DB_NAME=nome_do_banco

     REDIS_HOST=localhost
     REDIS_PORT=6379

     JWT_SECRET=sua_chave_secreta
     ```
   - Inicie o PostgreSQL e o Redis com Docker usando o arquivo `docker-compose.yml`.
   - Execute o projeto com `yarn start:dev` ou `npm run start:dev`.

3. **Execução via Docker:**
   - Altere a variável `POSTGRES_HOST` no arquivo `.env` para `db`, que é o nome do serviço definido no `docker-compose.yml`.
   - Instale as dependências com `yarn install` ou `npm install`.
   - Inicie o container Docker usando o comando `docker-compose up`.
   - Acesse o container Docker para criar o banco de dados. Use o comando `docker ps` para encontrar o nome do container e, em seguida, execute:
     ```
     docker exec -it nome_do_container psql -U postgres -c 'CREATE DATABASE nome_do_banco;'
     ```


### Rotas da API

O projeto está rodando na porta `8080`

- **Autenticação:** `POST /api/auth/login` para autenticar usuários.
- **Usuários:** `POST /api/user` para criar um novo usuário.
- **Filmes:** CRUD de filmes, prefixados com `/api/movies`.



### Documentação Swagger

O projeto inclui uma documentação interativa com Swagger, acessível através da rota [http://localhost:8080/api#](http://localhost:8080/api#). Lá, é possível explorar todos os endpoints disponíveis, entender suas funcionalidades e experimentá-los diretamente na interface do Swagger.

### Deploy

O projeto já está implantado e acessível em [https://mks-movies.onrender.com](https://mks-movies.onrender.com). Vale ressaltar que, atualmente, há um problema identificado no endpoint `get all movies` que retorna um array vazio, mesmo após a criação bem-sucedida dos filmes. Essa questão está sendo investigada para resolução, e caso deseje mais informações, estou à disposição para detalhar o problema.

## Experiência com as Tecnologias

- **Node.js:** Proficiente, 2 anos de experiência.
- **Nest.js:** Aprendizado durante o desenvolvimento deste projeto
- **Redis:** Aprendizado durante o desenvolvimento deste projeto
- **TypeScript:** Proficiente, 2 anos de experiência.
- **Docker:** Proficiente, 1 ano de experiência.
- **PostgreSQL:** Proficiente, 2 anos de experiência.
- **Swagger:** Utilizado para documentação da API.


### Referências de Aprendizado
Deixar aqui os links que me ajudaram a compreender e desenvolver o projeto, além da doc oficial de Nest e Redis.

#### Nest.JS:
- [NestJS do ZERO - Rocketseat](https://www.youtube.com/watch?v=TRa55WbWnvQ)
- [Criando uma API e CRUD completos com Nest e TypeORM - Matheus Castiglioni](https://www.youtube.com/watch?v=wLr23WHZQhA)
- [NestJS - Autenticação (Sistema de Login) - Paulo Salvatore](https://www.youtube.com/watch?v=3z6Cs_PtYc0)
- [Autenticação (Sistema de Login com Token JWT) - Fábrica de Sinapse](https://fabricadesinapse.gitbook.io/sinapse-book/nestjs/autenticacao-sistema-de-login-com-token-jwt)
- [Intensivão com novo Nest.js 10 - Full Cycle](https://www.youtube.com/watch?v=74Rks96yaAY)

#### Docker:
- [Guia passo a passo para configurar um aplicativo NestJS com Docker e PostgreSQL - Dev.to](https://dev.to/chukwutosin_/step-by-step-guide-setting-up-a-nestjs-application-with-docker-and-postgresql-5hei)

#### Redis + Docker:
- [Vídeo sobre Redis - Vimeo](https://vimeo.com/839715245/4a59688d65?share=copy)
- [NestJS, Redis and Postgres local development with Docker Compose](https://www.tomray.dev/nestjs-docker-compose-postgres)
