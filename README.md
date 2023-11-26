# Desafio Back-end MKS

Este repositório é parte do desafio para a vaga de back-end na MKS Desenvolvimento de Sistemas e Empreendimentos Ltda.

## Sobre o Desafio

O desafio proposto envolve a criação de um sistema de autenticação JWT e uma API CRUD para um catálogo de filmes. As ferramentas e tecnologias utilizadas incluem TypeScript, Nest.js, TypeORM, Swagger, Docker, PostgreSQL e Redis.

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

### 1. Instalação

 **Requisitos:**
   - Node.js
   - Nest.js
   - Docker
   - PostgreSQL
   - Redis


### 2. Passos para Execução

2.1. **Configuração do `.env`:**
   - Renomeie o arquivo `.env.example` para `.env`.
   - Defina `POSTGRES_HOST` como `db` para uso com Docker ou `localhost` para ambiente de desenvolvimento.
   - Preencha as demais variáveis de acordo com a configuração desejada.

2.2. **Executando com Docker:**
   - Verifique se a porta `5432` (padrão do PostgreSQL) não está sendo usada por outros processos.
   - Utilize o comando `docker-compose up` para iniciar o PostgreSQL e o Redis.
   - Acesse o Docker usando `docker exec -it <nome_do_container> bash`.
   - Utilize o comando `psql -U <seu_usuario> -d <nome_do_banco>` para acessar o PostgreSQL.
   - Execute `CREATE DATABASE <nome_do_banco>;` para criar o banco definido no `.env`.
   - Saia do shell do Docker com `exit`.

2.3. **Instalação e Inicialização do Projeto localmente:**
   - Clone este repositório.
   - Execute `yarn install` para instalar as dependências.
   - Inicie o projeto com `yarn start:dev`.

2.4. **Verificação:**
   - Verifique se a API está funcionando acessando os endpoints através do Swagger: `http://localhost:3000/api`.

2.5. **Testes Adicionais:**
   - Certifique-se de que as variáveis de ambiente estão corretamente configuradas para o ambiente de produção, se necessário.
   - Realize testes para garantir que a aplicação esteja funcionando corretamente em diferentes ambientes.

### Rotas da API

- **Autenticação:** `POST /api/auth/login` para autenticar usuários.
- **Usuários:** `POST /api/user` para criar um novo usuário.
- **Filmes:** CRUD de filmes, prefixados com `/api/movies`.

### Deploy

Este projeto pode ser facilmente implantado em plataformas como Heroku, Amazon EC2, entre outras. Certifique-se de configurar as variáveis de ambiente para o ambiente de produção.

## Experiência com as Tecnologias

- **Node.js:** Proficiente, 2 anos de experiência.
- **Nest.js:** Aprendizado durante o desenvolvimento deste projeto.
- **Redis:** Aprendizado durante o desenvolvimento deste projeto.
- **TypeScript:** Proficiente, 2 anos de experiência.
- **Docker:** Proficiente, 1 ano de experiência.
- **PostgreSQL:** Proficiente, 2 anos de experiência.
- **Swagger:** Utilizado para documentação da API.

## Considerações Finais

Primeiramente agradeço muito pela oportunidade. O desafio foi uma excelente oportunidade para expandir conhecimentos em Nest.js e Redis, apesar de não ter tido experiência prévia com estas tecnologias, estudei muito durante o prazo me dado, foi divertido e aprendi bastante coisa, fiquei um tempo penando com alguns bugs e problemas que fazem parte, mas no final consegui consertar todos os problemas que tive. Estou ansioso para a oportunidade de contribuir com a equipe. 
Vou deixar também as referências que peguei para estudar os desconhecidos até então Nest.JS e Redis.

### Referências de Aprendizado

#### Nest.JS:
- [(NestJS do ZERO) - Rocketseat](https://www.youtube.com/watch?v=TRa55WbWnvQ)
- [NestJS Tutorial - Matheus Castiglioni](https://www.youtube.com/watch?v=wLr23WHZQhA)
- [NestJS - Autenticação (Sistema de Login) - Paulo Salvatore](https://www.youtube.com/watch?v=3z6Cs_PtYc0)
- [Autenticação (Sistema de Login com Token JWT) e Swagger - Fábrica de Sinapse](https://fabricadesinapse.gitbook.io/sinapse-book/nestjs/autenticacao-sistema-de-login-com-token-jwt)

#### Nest.JS + Docker:
- [Guia passo a passo para configurar um aplicativo NestJS com Docker e PostgreSQL - Dev.to](https://dev.to/chukwutosin_/step-by-step-guide-setting-up-a-nestjs-application-with-docker-and-postgresql-5hei)

#### Redis:
- [Vídeo sobre Redis - Vimeo](https://vimeo.com/839715245/4a59688d65?share=copy)

Estas referências ajudaram no meu aprendizado e foram fundamentais para desenvolver o projeto, fornecendo insights valiosos e informações práticas sobre Nest.JS, Docker e Redis.
