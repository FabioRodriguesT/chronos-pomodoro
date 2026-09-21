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

### ✨ Funcionalidades
<ul>
    <li>⏱️ Temporizador baseado na Técnica Pomodoro</li>
    <li>📝 Criação e gerenciamento de tarefas</li>
    <li>🔄 Alternância automática entre períodos de trabalho e descanso</li>
    <li>⚙️ Configuração personalizada dos tempos de foco e pausa</li>
    <li>📋 Histórico das tarefas realizadas</li>
    <li>🌙 Tema claro e escuro</li>
    <li>🔔 Notificações para indicar mudanças de sessão</li>
    <li>💾 Persistência das configurações no navegador</li>
</ul>

## 🔌 Instalação:
Para a configuração do projeto, siga os seguintes passos:

Clone o Repositório:

```bash
git clone git@github.com:FabioRodriguesT/chronos-pomodoro.git
cd chronos-pomodoro
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
| `/`                          | Exibe a tela Principal com o cronômetro                     |
| `/history`                   | Exibe a tela do histórico, com todas as tarefas ja criadas  |
| `/settings`                  | Exibe a tela de configurações, podendo customizar os tempos das tarefas |
| `/about-pomodoro`            | Exibe a tela que explica sobra a técnica promodoro          |
| `/not-found`                 | Exibe a tela de página não encontrada                       |


## 📦 Dependências

### 📁 Dependencias:

- date-fns
- lucide-react
- nanoid
- react
- react-dom
- react-router
- react-toastify

### 🔬 Depêndencias de Desenvolvimento:

- @eslint/js
- @types/node
- @types/react
- @types/react-dom
- @vitejs/plugin-react-swc
- eslint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- globals
- typescript
- typescript-eslint
- vite

## 🗝 Licença:

Projeto relazido no curso do Udemy: Curso de React JS 19 e Next.js 15, criado por Luiz Otávio Miranda e Tales Calogi Malaquias.

