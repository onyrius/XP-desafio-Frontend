<h1 align="center"> <img src="https://media2.giphy.com/media/LltlvoNClpOdbJggXP/giphy.gif" alt="moeda de ouro girando"  width="200" align="center"/>Desafio XP inc.  Frontend <img src="https://media2.giphy.com/media/LltlvoNClpOdbJggXP/giphy.gif" alt="moeda de ouro girando"  width="200" align="center"/></h1>


## 👋 Bem-vindas e bem-vindos!
<!--  -->
Olá! Sejam bem-vindas e bem-vindos ao meu repositório! Meu nome é Suelen Arruda e vou apresentar o desafio  técnico da XP inc que topei participar! 
Algo importantíssmo de dizer: Esse desafio foi aceito durante um período mega corrido da <a  href="https://www.betrybe.com/"  rel="noreferrer">Trybe</a> e durante  <a  href="https://www.coursera.org/professional-certificates/gestao-de-projetos-do-google"  rel="noreferrer">o curso de gerenciamento de projetos do Google</a> , o que tornou ainda mais desafiador aceitá-lo!

E um momento tão corrido, tendo equilibrar os pratos da vida, optei por fazer algo simples e que cumprisse com os requisitos mínimos. 

<br/>

## 💡 O Desafio 💡

###  Desenvolver

✅ Tela de Login;

✅ Tela de Depósito e Saque numa conta digital;

✅ Uma tela que liste todas as ações disponíveis, diferenciando as ação que estão na carteira da pessoas daquelas ações que ela não investiu.

✅ Tela de Compra/Venda de Ações;



<br/>


## O Desenvolvimento

 Como o tempo está escasso, para desenvolver de forma rápida, escolhi stacks que já tenho familiaridade:<br/>
 - React js para montar os componentes;
 - Redux ToolKit e Hooks para manipular os estados e deixar o código um pouco mais sucinto;
 
No decorrer do desenvolvimento, encontrei vários desafios, bugs, erros que solucionei estudando as documentações, fazendo pesquisas em fóruns e <mark>**principalmente: me atentando ao que o erro dizia!**</mark>, ou seja a linha, os arquivos, o tipo de erro que vem descrito no console. Ao me atentar aos erros, aprendi sobre eles e quando acontecia novamente, já sabia como solucionar. Errar rápido para ir mais longe! 😉

##### ✅ Tela de Login
 Na tela de Login, o usuário insere email e senhas que passam por verificações:
   - senha com caracteres mínimos e email para habilitar o botão.
   - o email já deve estar cadastrado na base dados.
   - apenas quem cumpre todas as verificações que consegue entrar na aplicação.

##### ✅ Tela de Compra/Venda de Ações;
Quanda pessoa usuária faz login, entra na pagina inicial que lista todas ações que ela possui e ações da bolsa:
   - é possível selecionar os ativos que quer comprar ou vender;
   - é possivel entrar no banco de digital para depositar e para retirar dinheiro;
   
#### ✅ Tela que lista todas as ações;
Quando a pessoa seleciona que quer comprar ou quer vender um ativo, seja dela ou da Bolsa de Valores, ela é redirecionada para uma tela que na qual é possível executar apenas uma das ações: ou compra ou vendas:
  - só é possível comprar a quantidade disponível pela bolsa. 
  - é possível adicionar novos ativos à sua conta;
  - só é possível vender a quantidade de ações que a pessoa usuária possui;

#### ✅ Tela de Depósito e Saque numa conta digital;
Na tela de depósito digital, a pessa será capaz de:
   - depositar valores na sua conta;
   - retirar valores da sua conta;

##### ✅ Saldo: em toda aplicação é possível visualizar o saldo atualizado no Header da aplicação. 
<br>

## Stacks utilizada


<br>

<div align="left"> 
  
   <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
  </a>

  <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
  </a> 

  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
  </a>

  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  </a> 


  <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/>
  </a>

   <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
   </a> 

  <a href="https://redux.js.org" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/>
  </a>

</div>
 <br/>
 
  ---

## 🖥️ `Para rodar a aplicação em seu computador`

_A aplicação foi desenvolvida com o node v16.14.2._ <br/>
Faça um git clone do repositório para seu computador. Entre na pasta do desafio e rode os seguintes comando no terminal.


> instalará as dependências :
```
npm install
```  


> iniciará a aplicação localmente:

```
npm start
```  

_Caso não defina outra, aplicação rodará  na porta:
[http://localhost:3000](http://localhost:3000)._


> Para acessar a aplicação fazer login com as seguintes credencias:

```
email: suelenArruda@XP.com
senha: 5 caracteres ou mais da sua escolha
```

_Observações: os registros das usuárias e dos usuários estão na pasta src/simulacro/index_ 


<!-- ### 3 - `npm test`

Caso queria rodar os testes.  -->





 ---
 <br/>
 <em>Observações: Sou adepta dos testes, porém, como era a primeira vez que usava o Redux Toolkit, tive dificuldades para configurar o render do teste dentro do tempo solicitado.</em>

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/onyrius)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/suelen-arruda/)
