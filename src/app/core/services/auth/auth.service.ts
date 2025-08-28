import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly _storage: StorageService = inject(StorageService);
  private readonly http: HttpClient = inject(HttpClient);

  private apiUrl = 'http://localhost:4200/usuarios/api/login/';

  constructor() {
  }

 async login(credentials: { username: string; password: string }): Promise<any> {
    try {
      const res = await firstValueFrom(
        this.http.post<any>(this.apiUrl, credentials)
      );
      if (res.data.access && res.data.refresh) {
        console.log('sdm,bdsd', res)
        this._storage.setToken(res.data.access)
        localStorage.setItem('refresh_token', res.data.refresh);
      }

      return res;
    } catch (error: any) {
      console.error('Error en login:', error);
      throw error;
    }
  }

}
