import { platformBrowser }    from '@angular/platform-browser';
import { AppClientModuleNgFactory } from '../built/src/app/app.client.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppClientModuleNgFactory);