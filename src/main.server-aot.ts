
// polyfills
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';

// angular

// libs
import * as express from 'express';
import * as compression from 'compression';
import { ngExpressEngine } from '@nguniversal/express-engine';

// module
import { AppServerModuleNgFactory } from '../aot/src/app/app.server.module.ngfactory';

const server = express();
server.use(compression());

/**
 * Set view engine
 */
server.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory
}));

server.set('view engine', 'html');
server.set('views', '');

/**
 * Point static path to `public`
 */
server.use('/', express.static('./', {index: false}));

/**
 * Catch all routes and return the `index.html`
 */
server.get('*', (req: any, res: any) => {
  res.render('index.html', {
    req,
    res
  });
});

/**
 * Port & host settings
 */
const port = 8000;
const PORT = process.env.PORT || port;
const HOST = process.env.BASE_URL || 'localhost';
const baseUrl = `http://${HOST}:${PORT}`;

server.set('port', PORT);

/**
 * Begin listening
 */
server.listen(server.get('port'), () => {
  // tslint:disable-next-line
  console.log(`Express server listening on ${baseUrl}`);
});
