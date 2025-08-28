import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { StorageService } from '../services/storage/storage.service';

export const AuthInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const storage = inject(StorageService);
  const token = storage.getToken();

  let authReq = req;
  if (token && token !== 'undefined' && token !== 'null') {
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }

  return next(authReq).pipe(
    catchError((error) => {
      if (error.status === 401) {
        storage.logout();
      }
      return throwError(() => error);
    })
  );
};
