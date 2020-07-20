import { KeycloakConfig } from 'keycloak-angular';

let keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8088/auth',
  realm: 'realmTEST',
  clientId: ' ',
  credentials: {
    secret: '66d8a2f6-8763-4519-8da6-bbcef7870cc5',
  },
};

export const environment = {
  keycloak: keycloakConfig,
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
