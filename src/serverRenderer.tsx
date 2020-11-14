import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './App';
import configureStore from './redux/configure-store';

function renderHTML(html, preloadedState) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="icon" href="favicon.ico" type="image/icon">
      <link rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <title>ReactJs</title>
    </head>
    
    <body>
      <div id="root">${html}</div>
      <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(
              /</g,
              "\\u003c"
            )}
          </script>
    </body>
    
    </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    // This context object contains the results of the render
    const context = {};

    const renderRoot = () => (
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    store.runSaga().done.then(() => {
      const htmlString = renderToString(renderRoot());

      if (context.url) {
        res.writeHead(302, {
          Location: context.url,
        });
        res.end();
        return;
      }

      const preloadedState = store.getState();

      res.send(renderHTML(htmlString, preloadedState));
    });
    renderToString(renderRoot());
    store.close();
  };
}
