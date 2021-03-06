// Angular
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@ngrx/store';
import '@ngrx/core';

// RxJS
import 'rxjs';

// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...


import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/reflect';

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';


import { platformBrowser }    from '@angular/platform-browser';
import { AppClientModuleNgFactory } from '../built/src/app/app.client.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppClientModuleNgFactory);
