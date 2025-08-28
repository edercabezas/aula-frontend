import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, firstValueFrom, map, throwError } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private _http: HttpClient = inject(HttpClient);
  private storage: StorageService = inject(StorageService);
  apiUrl: string;
  constructor() {
    this.apiUrl = '/usuarios/api';
  }


  async getProfile(): Promise<any> {

    const token = this.storage.getToken();

    if (!token) {
      console.warn('No hay token, no se consulta perfil');
      return null;
    }

    return firstValueFrom(
      this._http.get(`${this.apiUrl}/perfil`).pipe(
        map((response: any) => (response.data ? response.data : response)),
        catchError((error: any) => {
          console.error('Error al consultar perfil', error);
          return throwError(() => error);
        })
      )
    );
  }

  async updateProfile(data: any): Promise<any> {
    return firstValueFrom(
      this._http.put(`${this.apiUrl}/usuario/perfil/`, data).pipe(
        catchError((error: any) => {
          const formattedError = {
            status: error.status,
            message: error.error?.message || 'Error al actualizar el perfil',
            error: error.error || error,
          };

          console.error('Error en updateProfile:', formattedError);
          return throwError(() => formattedError);
        })
      )
    );
  }

  async updatePhoto(file: any): Promise<any> {
    console.log(file);

    const formData = new FormData();
    formData.append('foto', file);

    console.log(formData);

    return firstValueFrom(
      this._http.patch(`${this.apiUrl}/perfil/foto/`, formData).pipe(
        catchError((error: any) => {
          console.error('Error al actualizar la image del perfil', error);
          return throwError(() => error);
        })
      )
    );
  }
}
