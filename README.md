# Desafio - Softdesign

## Resumo
Sistema web para gerenciamento de usuários e livros.

## Sobre
Este sistema web foi desenvolvido com React JS, Symfony PHP e MySQL.

### Funcionalidades

* Autenticação de usuários
* Registro
* Administração de usuários e livros
* Integração com API HG Brasil para exibição de clima tempo atual

## Dependências
### Docker
- [DOCKER](https://docs.docker.com/engine/install/)
  
### Frontend
- [ReactJS 18.2.0](https://www.npmjs.com/package/react/v/18.2.0)

### Backend
- [Symfony 6.1](https://symfony.com/releases/6.1)
- [PHP 8.1+](https://www.php.net/downloads.php)
- [MySQL](https://www.mysql.com/)

## Instalação

1. Clone o repositório: `git clone https://github.com/robson-moura/desafio-softdesign.git`
2. Execute os comandos:
   - `docker-compose up -d` na raiz do projeto
   - `npm install` na pasta frontend
   - `docker exec -it php bash`
   - `composer install`
   - `php bin/console doctrine:migrations:migrate`
   - `npm start` na pasta frontend

## Uso do Sistema

1. Acesse `http://localhost:3000/login`
2. Crie uma nova conta
3. Realize o login com nome de usuário e senha da conta criada
4. Será redirecionado para a home com acesso aos menus

## Contato
Robson Moura
