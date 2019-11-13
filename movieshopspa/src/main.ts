import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// bootstrap means starting point, it execute the appmodule 
// every angular application should have at least one 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
