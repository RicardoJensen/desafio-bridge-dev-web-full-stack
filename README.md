# Desafio-Bridge-Privado
Processo Seletivo Bridge | Desafio Bolsista de Desenvolvimento Web Full Stack

**Tecnologias utilizadas para o desenvolvimento da aplicação web:**
- Para o frontend:
  * Angular, um framework para desenvolvimento de aplicaçãoes
  * Boostrap, um framework CSS
  * TypeScript, uma linguagem de programação construída em cima do Javascript
  * SCSS, uma versão mais avançada do CSS utilizada para a estilizar aplicações
  * HTML, uma linguagem de marcação utilizada na construção de páginas
- Para o backend:
  * Spring Boot, um framework Java que facilita o desenvolvimento de aplicações
  * Java, uma linguagem de programação orientada a objetos

**Para executar o projeto localmente siga os seguintes passos:**
- Para rodar o frontend:
  * Instale o Node.js
  * Abra um terminal e acesse a pasta frontend (cd frontend)
  * Execute o comando: npm install (para a instalação das dependências)
  * Execute o comando: npm start (O projeto deve abrir sozinho, caso ao contrário acesse http://localhost:4200)
  
- Para rodar o backend:
  * Instalale o Java(jdk) e configure as variáveis de ambiente
  * Instalale o Maven e configure as variáveis de ambiente
  * Abra outro terminal e abra a pasta backend (cd backend)
  * Execute o comando: mvn spring-boot:run

**Links para acesso**
- frontend: https://ps-bridge-frontend.herokuapp.com
- backend: https://ps-bridge-backend.herokuapp.com (/api/{k})

**Observação:**
O limite de 999 milhões colocado na entrada do usuário se deve por conta do valor máximo que não causava erro algum na execução local. Caso a solução publicada no cloud provider apresente erros, mesmo com o limite menor de 99 milhões, provavelmente é por conta de limitações ou escassez de recursos do serviço gratuito fornecido pelo heroku.