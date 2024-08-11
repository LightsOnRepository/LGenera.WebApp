import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

function logginfInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) {
  const authToken = localStorage.getItem('authToken');
  
  if (authToken){
    const req = request.clone({
       headers: request.headers.set('Authorization', authToken) 
      });
    return next(req);
  }

  return next(request);
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideHttpClient(
    withInterceptors([logginfInterceptor])
  )]
};
