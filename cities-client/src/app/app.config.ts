import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

//code reuse with injections of globally-used values
export const APPLICATION_TITLE = new InjectionToken<string>('AppTitle');
export const BASE_SERVER_URL = new InjectionToken<string>('Server url');

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APPLICATION_TITLE, useValue:'Cities Client'},
    { provide : BASE_SERVER_URL, useValue: 'http://localhost:5198/api'},
    provideHttpClient(),
    provideRouter(routes)]
};
