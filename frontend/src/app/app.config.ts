import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [provideBrowserGlobalErrorListeners(), provideRouter(appRoutes)],
};

declare const process: any;

export const environment = {
    // If the build defines process.env.API_URL, use it; otherwise fallback
    apiUrl: typeof process !== 'undefined' ? process.env.API_URL : 'api',
};
