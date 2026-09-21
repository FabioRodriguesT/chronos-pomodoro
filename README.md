## Descrição:

**Chronos pomodoro** é um app de uma aplicação web desenvolvida para auxiliar no gerenciamento do tempo e aumentar a produtividade utilizando a Técnica Pomodoro.

A aplicação permite organizar sessões de foco e pausas de forma simples, mantendo o usuário concentrado em suas atividades durante períodos determinados de trabalho, seguidos por intervalos de descanso.

## ✒️ Sumário

- [API Consumida](#-api-consumida)
- [Sobre o projeto](#-sobre-o-projeto)
- [Instalação](#-instalação)
- [Utilizando a API](#-utilizando-a-api)
- [Rotas disponíveis](#%EF%B8%8F-rotas-dispon%C3%ADveis)
- [Dependências](#-dependências)
- [Licença](#-licença)

## 📋 Sobre o projeto:

### ⚙️ O que foi desenvolvido:

O projeto foi desenvolvido com foco em organização de código, componentização, gerenciamento de estado e boas práticas de desenvolvimento, servindo também como projeto prático para aprofundar conhecimentos em desenvolvimento Front-end.

✨ Funcionalidades.
<ul>
    <li>⏱️ Temporizador baseado na Técnica Pomodoro</li>
    <li>📝 Criação e gerenciamento de tarefas</li>
    <li>🔄 Alternância automática entre períodos de trabalho e descanso</li>
    <li>⚙️ Configuração personalizada dos tempos de foco e pausa</li>
    <li>📋 Histórico das tarefas realizadas</li>
    <li>🌙 Tema claro e escuro</li>
    <li>🔔 Notificações para indicar mudanças de sessão</li>
    <li>💾 Persistência das configurações no navegador</li>
<ul>



No app foram criadas 10 telas, são elas: 




As telas de "Meals In Progress e Drinks In Progress" permitem ao usuário acompanhar o progresso da receita, marcando os ingredientes conforme são preparados. O estado é mantido mesmo após atualizar a página, utilizando o localStorage com a chave inProgressRecipes .

O aplicativo consome as APIs públicas do TheMealDB e TheCocktailDB para obter dados de receitas e drinks.

## 🔌 Instalação:
Para a configuração do projeto, siga os seguintes passos:

Clone o Repositório:

```bash
git clone git@github.com:FabioRodriguesT/project_recipes_app.git
cd project_recipes_app
```

Instale as dependências:

```bash
npm install
```

### 🌐 Utilizando a API:

Você pode executar a API utilizando npm.
Utilizando npm

Para executar a API, use o seguinte comando:

```bash
npm run start
```

Você pode então acessar a API em http://localhost:3000 (ou utilizando sua porta específica).

### 🗺️ Rotas disponíveis:

| Rota                         | Funcionalidade                                               |
|:----------------------------:|:-----------------------------------------------------------:|
| `/`                          | Exibe a tela de login do aplicativo                         |
| `/meals`                     | Exibe todas as receitas de comidas                          |
| `/drinks`                    | Exibe todas as receitas de bebidas                          |
| `/profile`                   | Exibe o perfil do usuário                                   |
| `/done-recipes`              | Exibe todas as receitas já realizadas                       |
| `/favorite-recipes`          | Exibe todas as receitas favoritas                           |
| `/meals/{id}`                | Exibe os detalhes de uma receita de comida pelo **ID**      |
| `/drinks/{id}`               | Exibe os detalhes de uma receita de bebida pelo **ID**      |
| `/meals/{id}/in-progress`    | Exibe o progresso de uma receita de comida pelo **ID**      |
| `/drinks/{id}/in-progress`   | Exibe o progresso de uma receita de bebida pelo **ID**      |

## 🧪 Testes

### ✅ Cobertura de Código

Os testes deste projeto alcançam 100% de cobertura de código, garantindo que todas as funcionalidades estejam devidamente validadas. Utilizamos o Vitest, um framework de testes rápido e leve, integrado ao Vite.

### 🚀 Executando os Testes

Para rodar os testes localmente, execute o seguinte comando:

```bash
npm run test
```

Para gerar um relatório de cobertura em tempo real, utilize:

```bash
npm run coverage
```

Isso criará um relatório detalhado em HTML, que pode ser visualizado no navegador.

## 📦 Dependências

### 📁 Dependencias:

- date-fns
- mocha
- react
- react-dom
- react-google-fonts
- react-router-dom
- styled-components

### 🔬 Depêndencias de Desenvolvimento:

- eslint
- eslint-plugin-react-hooks
- cross-env
- @testing-library/dom
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- @types/jest
- @types/react-dom
- @types/react-router-dom
- typescript
- vite
- @vitejs/plugin-react
- vitest
- vitest-coverage-v8
- cypress
- cypress-multi-reporters
- jsdom
- stylelint
- stylelint-order

## 🗝 Licença:

Este projeto é licenciado sob a Licença MIT. Boa codificação!

