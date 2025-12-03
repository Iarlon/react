# Projetos de React (aulas)

Este repositório contém vários projetos React organizados por pastas "aulaXX". Cada pasta é um projeto Vite + React independente, criado para ensinar um conceito específico — portanto podem ser abertos, instalados e executados separadamente.

Visão geral rápida

- Cada pasta (ex.: `aula01`, `aula02`, ...) é um projeto completo com `package.json`, `index.html` e código fonte em `src/`.
- Para executar qualquer aula:
  1. Abra um terminal na pasta da aula (ex.: `cd aula03`).
  2. Rode `npm install`.
  3. Rode `npm run dev`.
- Alguns projetos incluem um servidor fake (json-server). Quando presente, há um script `server` em `package.json` (ex.: `npm run server`).

Lista de projetos e dependências (destaques)

- aula01
  - Dependências: `react`, `react-dom` (ambas ^19.1.1)
  - Diferenciais: nenhuma dependência adicional (apenas React).

- aula02
  - Dependências: `react`, `react-dom` (ambas ^19.1.1)
  - Diferenciais: nenhuma dependência adicional.

- aula03
  - Dependências: `react`, `react-dom` (ambas ^19.1.1)
  - Diferenciais: nenhuma dependência adicional.

- aula04
  - Dependências: `react`, `react-dom` (ambas ^19.1.1)
  - Diferenciais: nenhuma dependência adicional.

- aula05
  - Dependências: `react`, `react-dom` (ambas ^19.1.1), `json-server` (^1.0.0-beta.3)
  - Diferenciais: `json-server` — usado para simular uma API (script `server`).

- aula05_2
  - Dependências: `react`, `react-dom` (ambas ^19.1.1), `json-server` (^1.0.0-beta.3)
  - Diferenciais: `json-server` — idem aula05 (script `server`).

- aula06
  - Dependências: `react`, `react-dom` (ambas ^19.1.1), `axios` (^1.13.2), `bootstrap` (^5.3.8), `json-server` (^1.0.0-beta.3), `react-router-dom` (^7.9.5)
  - Diferenciais: `axios`, `bootstrap`, `react-router-dom`, `json-server` — demonstra chamadas HTTP, estilo com Bootstrap e roteamento.

- site-uniesp
  - Dependências: `react` & `react-dom` (^19.2.0), `axios` (^1.13.2), `bootstrap` (^5.3.8), `react-bootstrap` (^2.10.10), `json-server` (^1.0.0-beta.3), `react-router-dom` (^7.9.5)
  - Diferenciais: `react-bootstrap` (componentes Bootstrap prontos), `axios`, `react-router-dom` e `json-server`.

Observações sobre devDependencies

- Todos os projetos usam Vite e ESLint nas devDependencies (ex.: `vite`, `eslint`, `@vitejs/plugin-react`, `@eslint/js`, tipos `@types/react`/`@types/react-dom`).
- As versões de devDependencies variam entre as aulas (projetos mais recentes como `site-uniesp` têm versões ligeiramente mais novas de Vite/ESLint/@types).

Como contribuir / abrir uma aula

- Cada pasta é independente: abra o VS Code na pasta que deseja estudar ou execute os comandos no terminal apontando para a pasta.
- Se for usar as APIs falsas, execute `npm run server` (quando presente) em uma janela separada antes de iniciar a aplicação.

Licença

Sinta-se livre para usar os exemplos para estudo. Nenhuma licença específica foi adicionada ao repositório.

---

Se quiser que eu adicione um sumário com links para cada pasta, instruções de instalação por SO, ou destaque das versões exatas das devDependencies por projeto, diga qual formato prefere que eu gere.
