# testes

- Contar todas as palavras.
- Contar palavras com quantidades pares de caracteres.
- Contar palavras começadas com maiúsculas.
- Utilize o padrão observer

# DESCRICAO DA ATIVIDADE Criar  um aplicativo (programa) que recebe uma frase e quebre em palavras(String). A aplicação deve contar as palavras.

# Comandos para utilização do projeto:

```npm install``` -> Para adicionar as dependencias do projeto.

```npm install -g typescript``` Para instalar dependecias do typescript

``` npm install @types/mocha ``` Para instalar o mocha


```tsc src/principal.ts``` -> gerar arquivos ts

```node src/principal.js``` -> notifica observadores

# Testes:

```npm test``` -> Faz os testes de contagem e de notificação do observador.

É testado se os metodos de contagem estão retornando o esperado e se os observers estao sendo adicionados, removidos e notificados.