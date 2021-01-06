## **Moviemoji** :zombie: ![Node.js CI](https://github.com/XandeCoding/Moviemoji/workflows/Node.js%20CI/badge.svg?branch=main) [![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

## **Descrição**

Um projeto que propõe uma forma de avaliar filmes de forma diferente focado em saber a experiência que o usuário teve em relação usando emojis comuns para avaliar se o filme foi bom, ruim, ótimo, nojento, fofo, amedrontador e outras possibilidades também.

## **Ferramentas**

[**Node.js:**](https://nodejs.org/en/) Node.js trata-se de um software open-source, cross-platform, e de um runtime de JavaScript que execute código de JavaScript a nível backend e frontend.

[**Hapi.js:**](https://hapi.dev/) O Hapi.js é um ambiente de execução Javascript server-side

[**PostgreeSQL:**](https://www.postgresql.org/) PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto que será usado para deixar o sistema para produção.

[**Knex:**](http://knexjs.org/) Knex é um query builder para sql que pode ser usado tanto no Node.JS quanto no browser(o que não é uma boa ideia na maioria dos casos), para o nosso caso ele serviu muito bem pois além de permitir criarmos as queries da forma que necessitarmos ele cria as tabelas e também previne falhas de segurança como SQL injection.

[**Sqlite:**](https://www.sqlite.org/index.html) SQLite é uma biblioteca em linguagem C que implementa um banco de dados SQL embutido, a qual vamos usar para a propotipagem do projeto e realizar os testes iniciais.

[**ESLint:**](https://eslint.org/) ESLint é uma ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código JavaScript.


## **Links do Projeto**
**Link Figma:** https://www.figma.com/file/akruNKkN5PZcxSRyb4vs9O/MovieMoji?node-id=0%3A1

**Link para os casos de uso:** https://app.lucidchart.com/lucidchart/b4e434c7-d5e3-498c-b430-1f59af9b7c90/edit?shared=true&page=0_0#?folder_id=home&browser=icon

**Link para o diagrama do banco de dados:** https://drive.google.com/file/d/1Xu7ayw15uj91uBh_0sFqL1hSs1KsOqio/view?usp=sharing

**Link para o Front-end:** https://github.com/arthur-es/Moviemoji

## **Instalação**

Para rodar todo o software basta ter o docker compose instalado e usar o comando

_docker-compose up_

Caso não tenha pode ser usado esse guia para rodar o backend e o frontend só mudando a pasta onde é executado o npm install e o npm start.

_**Obs.:** No Ubuntu 20 com instalação mínima._


sudo apt install git

sudo apt install curl **#Instalando o "curl"**

curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - **#Baixando a versão 12 e executando**

sudo apt install -y nodejs **#Para instalar o node**

node --version **#Para verificar se foi instalado**

git clone https://github.com/XandeCoding/Moviemoji

cd Moviemoji/

npm install

npm start

## **Integrantes do grupo:**
- Alexandre Fernandes *(XandeCoding)*
- Fabiano Gomes *(fabianogomess)*
- Miguel *(miguelfesanbar)*
- Raul Victor *(raulvdias)*
