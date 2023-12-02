import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const environment = {
  production: false,
  starWarsBaseUrl: 'https://swapi.dev/api/',
};

export const EXTENSION_MODULES = [
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    name: 'NgRx Drooms Store',
  }),
];
