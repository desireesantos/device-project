import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeversionComponent } from './codeversion/codeversion.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

const keycloakService = new KeycloakService();

@NgModule({
  declarations: [AppComponent, CodeversionComponent],
  imports: [BrowserModule, AppRoutingModule, KeycloakAngularModule],
  providers: [
    {
      provide: KeycloakService,
      useValue: keycloakService,
    },
  ],
  entryComponents: [AppComponent],
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef) {
    keycloakService
      .init()
      .then(() => {
        console.log('[ngDoBootstrap] bootstrap app');

        appRef.bootstrap(AppComponent);
      })
      .catch((error) =>
        console.error('[ngDoBootstrap] init Keycloak failed', error)
      );
  }
}
