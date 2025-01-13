import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { environment } from '@environments/environment';
import { Environment } from '@environments/environment.type';
import { ApiMockService } from '@shared/services/api/api-mock.service';
import { ApiService } from '@shared/services/api/api.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: ApiService,
      useFactory: () =>
        environment.name === Environment.Mock
          ? new ApiMockService()
          : new ApiService(),
    },
  ],
};
