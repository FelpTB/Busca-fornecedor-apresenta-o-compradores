const path = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'main');
const entryFile = path.join(publicDir, 'presentation (1).html');

app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));
app.use(compression());

app.use(express.static(publicDir, {
  maxAge: '1h',
  extensions: ['html']
}));

app.get('/', (_req, res) => {
  res.sendFile(entryFile);
});

app.use((req, res) => {
  res.status(404).sendFile(entryFile);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Presentation ready on port ${PORT}`);
});

