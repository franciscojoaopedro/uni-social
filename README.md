<h1 align="center">UniSocial - FrontEnd</h1>

## Descrisão
___

>Este é um projeto que visa ajudar a Unibelas a comunicar com os seus estudantes sabendo sobre o que eles pensam sobre determinados fatores, a informar os estudantes sobre os assuntos da instituição, dar voz aos estudantes em assuntos.

<h4 align="center"> 
	🚧  O UniSocial 🚀 Em construção...  🚧
</h4>

## Tabela de sumários

<!--ts-->
   * [Descrisão](#descrisão)
   * [Tabela de sumários](#tabela-de-sumarios)
   * [Interfaces](#Interfaces)
   * [Pré-requisitos para usar o project](#Pré-requisitos)
   * [Passa para Instalação](#instalacao)
   * [Tecnologias](#tecnologias)
   * [Norma de como trabalhar](#norma)
   * [contribuidores](#contribuidores)
<!--te-->

## Interfaces
  ### Módulos ads:
    [] Login
    [] Sighup
    [] Publicação
    [] Home

## Cores
___
<ul>
  <li style="display:flex; align-items: center; font-size: 1.3rem; font-weight: 500">
    <div style="width: 16px; height: 16px; background: #FFC745; margin: 0 6px"></div>
    laranjaClaro-300: #FFC745;
  </li>
  <li style="display:flex; align-items: center; font-size: 1.3rem; font-weight: 500">
    <div style="width: 16px; height: 16px; background: #FFF; margin: 0 6px"></div>
    fundo: #FFF;
  </li>
  <li style="display:flex; align-items: center; font-size: 1.3rem; font-weight: 500">
    <div style="width: 16px; height: 16px; background: #F2B705; margin: 0 6px"></div>
    laranjaClaro-200: #F2B705;
  </li>
  <li style="display:flex; align-items: center; font-size: 1.3rem; font-weight: 500">
    <div style="width: 16px; height: 16px; background: #F28705; margin: 0 6px"></div>
    laranjaEscuro-400: #F28705;
  </li>
  <li style="display:flex; align-items: center; font-size: 1.3rem; font-weight: 500">
    <div style="width: 16px; height: 16px; background: #FF9F00; margin: 0 6px"></div>
    laranjaEscuro-200: #FF9F00;
  </li>
  <li style="display:flex; align-items: center; font-size: 1.3rem; font-weight: 500">
    <div style="width: 16px; height: 16px; background: #262626; margin: 0 6px"></div>
    fundo-noite: #262626;
  </li>
  <li style="display:flex; align-items: center; font-size: 1.3rem; font-weight: 500">
    <div style="width: 16px; height: 16px; background: #A3A3A3; margin: 0 6px"></div>
    cinzaClaro-200: #A3A3A3;
  </li>
  <li style="display:flex; align-items: center; font-size: 1.3rem; font-weight: 500">
    <div style="width: 16px; height: 16px; background: #A6A6A6; margin: 0 6px"></div>
    cinzaClaro-400: #A6A6A6;
  </li>
  <li style="display:flex; align-items: center; font-size: 1.3rem; font-weight: 500">
    <div style="width: 16px; height: 16px; background: #000000; margin: 0 6px"></div>
    preta: #000000;
  </li>
</ul>

## Pré-requisitos usar
---

> Antes de começar, você vai precisar ter instalado em sua máquina a seguinte ferramenta que é o 
> [Git](https://git-scm.com). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/), a extensão do vscode [ESLint]() para mostrar error de sintaxe, a extensão [prettier]() para facilitar em ler e escrever regra do pretttier,a [EditorConfig] para manter padrão independentemente do editor de codigo,e a [yarn](https://yarnpkg.com/) para gerenciamento dos pacotes.  


## Passo para instalação
___

```bash
# Clone este repositório
$ git clone <https://github.com/franciscojoaopedro/uni-social-backend.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd uni-social

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

## 🛠 Tecnologias
---

> As seguintes ferramentas foram usadas na construção do projeto:

- [vite](https://pt-br.reactjs.org/)
- [React](https://code.visualstudio.com/)
- [pritter](https://prettier.io/)
- [eslint](https://eslint.org/)
- [editorConfig](https://editorconfig.org/)
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)

## Norma de como trabalhar no Projeto
___

<ol>
  <li>Trabalhar só nos sábados e domingos horário a sua escolha.</li>
  <li>Relatar sobre as alterações feitas no projeto no grupo do facebook ou whatsapp.</li>
  <li>Documentar código verboso.</li>
  <li>Escrever o código em português assim como os commits.</li>
  <li>Refactor código que achas que deverias fazer melhor antes de lançar no github.</li>
  <li>Qualquer erro que está dando, tenta primeiro solucionar antes, se não conseguir comunica sobre o erro.</li>
  <li>
    Criar sempre uma branch quando se trabalha numa funcionalidade ou interface.
      
      ex: 
        Antes de desenvolver:
          git branch feat/login - criar uma branch
          git checkout feat/login - ativar para começar

        Depois desenvolver tudo:
          git checkout main - ativar o main
          git merge feat/login - junta todos os feitos da branch feat/login ao main.
          git branch feat/login -D - deletar a branch.  
  </li>
  <li>
    Ao fazer um git push deve-se fazer sempre isto.
    
    ex:
      git pull - para baixar novas alterações.
      git push ou git push origin main - casos não ouver conflitos 
  </li>
</ol>

## Contribuidores
___
<div style="display: flex; align-items: center; gap: 6px 12px; margin-top: 24px;">
  <img 
    src="https://avatars.githubusercontent.com/u/79996151?v=4"
    width="5%"
    height="1.5%"
    style="border-radius: 50%;"
  /> 
  <span style="font-size: 1.5rem;">Ngunga dev </span>
  <a href="https://github.com/franciscojoaopedro">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
   <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  <span style="display: flex; align-items: center; font-size: 1.3rem; margin-left: 6px;">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>: franciscojoaopedro1998@gmail.com
  </span>
</div>

<div style="display: flex; align-items: center; gap: 6px 12px; margin-top: 24px;">
  <img 
    src="https://avatars.githubusercontent.com/u/81929793?v=4"
    width="5%"
    height="1.5%"
    style="border-radius: 50%;"
  /> 
  <span style="font-size: 1.5rem;">Walany Costa</span>
  <a href="https://github.com/Walany Costa">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  <span style="display: flex; align-items: center; font-size: 1.3rem; margin-left: 6px;">
    <img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white"/>  : walanycosta@outlook.com
  </span>
</div>

<div style="display: flex; align-items: center; gap: 6px 12px; margin-top: 24px;">
  <img 
    src="https://avatars.githubusercontent.com/u/103551541?v=4"
    width="5%"
    height="1.5%"
    style="border-radius: 50%;"
  /> 
  <span style="font-size: 1.5rem;">Gouveia51</span>
  <a href="https://github.com/Gouveia">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
   <span style="display: flex; align-items: center; font-size: 1.3rem; margin-left: 6px;">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>: GouveiaGaspar51@gmail.com
  </span>
</div>