import * as express from 'express';
import * as compression from 'compression';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { getStyles } from 'typestyle';
import { App } from '../app/app';
import { join } from 'path';
import { readFileSync } from 'fs';
import Helmet from 'react-helmet';

const PORT = process.env.PORT || 3000;
const TEMPLATE = readFileSync(join(process.cwd(), 'dist', 'index.html')).toString();

const app = express();

app.use(compression());

app.use('/public', express.static(join(process.cwd(), 'dist', 'public')));

app.get('*.*', (req, res) => res.status(404).send());

app.get('*', (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );
  const css = getStyles();
  const head = Helmet.rewind();

  res.send(
    TEMPLATE
      .replace(`</head>`, `${head.title.toString()}${head.meta.toString()}</head>`)
      .replace(`id="styles-root">`, `id="styles-root">${css}`)
      .replace(`id="root">`, `id="root">${html}`)
      .replace(`<script type`, `<script async type`)
  );
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
