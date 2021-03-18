# Protagonist - Design System

Olá avaliador, tudo bem? :call_me_hand:

Eu batizei a minha jornada de desafios técnicos como "Protagonist". 
No primeiro episódio da série "Protagonist", enfrentei o exercício 1! :muscle:

Neste projeto, além de uma tipografia componentizada, você encontrará uma estrutura que permite criar vários temas e estilos globais para uma aplicação.
Espero que goste! :relaxed: 

# Clonando o projeto e instalando as dependências

O projeto foi desenvolvido com React JS, portanto para executá-lo precisamos garantir que sua máquina possua o [NPM](https://www.npmjs.com/get-npm) ou [YARN](https://classic.yarnpkg.com/en/docs/install/#windows-stable) para gerenciar as bibliotecas e pacotes. Caso seja necessário, instale também o [Node JS](https://nodejs.org/en/download/). Assegurado que sua máquina possui essas dependências instaladas, vamos clonar o projeto.

## Clonando o projeto
```bash
git clone git@github.com:matheuspalmeir/protagonist
```
##  Instalando pacotes

Algumas bibliotecas e pacotes que foram utilizados no desenvolvimento são: 
* [Create React App](https://github.com/facebook/create-react-app)
* [Typescript](https://www.typescriptlang.org/)
* [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
* [Styled Components](https://styled-components.com/docs/api)
* [Styled System](https://styled-system.com/)
* [React Styleguidist](https://github.com/styleguidist/react-styleguidist)

Abra novamente o seu terminal e acesse o diretório projeto. 

```bash
cd /protagonist
```
Acesse agora, o caminho "1-EXERCISE/design-system" e estando neste diretório execute no seu terminal: 

```bash
npm install
# or
yarn 
```

Ainda estando no diretório do projeto, para inicializa-lo execute: 

```bash
yarn start
```
Verifique se a execução foi correta, em seguida basta abrir o endereço [http://localhost:3000](http://localhost:3000) no navegador. 
Na homepage você encontrará amostras do uso de Cores e de Tipografia. 

# Compreendendo como a Tipografia e os componentes funcionam

Toda a documentação do projeto foi gerada com a biblioteca React Styleguidist. Você encontrará dois comandos personalizados no "package.json, sendo eles:

#### `yarn styleguidist:server`
#### `yarn styleguidist:build`

## Acessando as instruções de uso dos componentes

Para acessar a documentação completa de como utilizar a tipografia e os componentes React, execute no terminal, estando no diretório do projeto:
```bash
yarn styleguidist:server
```
Agora, é só abrir a URL http://localhost:6060/ no seu navegador. 



