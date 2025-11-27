## Deploy no Railway

- **Preparar dependências**
  - Instale os pacotes: `npm install`
  - Confirme que `main/presentation (1).html` e a pasta `photos/` estão presentes

- **Testar localmente**
  - Rode `npm start`
  - Acesse `http://localhost:3000` para validar a apresentação

- **Subir para o Railway**
  - Crie um novo projeto e conecte este repositório
  - Railway detecta o `package.json` e define automaticamente `npm start`
  - Não é necessário build; o serviço é do tipo web, porta `$PORT`

- **Dica**
  - Ajuste o domínio em `Settings > Domains` para compartilhar o link com outras pessoas

