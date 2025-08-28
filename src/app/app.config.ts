import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from "@angular/material/core";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
     provideHttpClient(withInterceptors([AuthInterceptor])),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideClientHydration(withEventReplay()),
     importProvidersFrom(
       ToastrModule.forRoot({
          timeOut: 5000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true,
        }),
     ),
      provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: "es-ES" }
  ]
};
