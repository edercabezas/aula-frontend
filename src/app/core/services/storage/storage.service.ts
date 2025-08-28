import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  private data = new BehaviorSubject(null);
  currentMessage = this.data.asObservable();



  private readonly TOKEN_KEY = 'token';
   private readonly USER_DATA = 'userData';


     changeMessage() {

    this.consultarDatosLocales();
  }

  constructor() {

     this.consultarDatosLocales();
  }



  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): any {
    if (typeof window !== 'undefined') {
    return localStorage.getItem(this.TOKEN_KEY);
    }
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  setDataUser(data: any): void {
     localStorage.setItem(this.USER_DATA, JSON.stringify(data))
  }


  logout(): void {

    if (typeof window !== 'undefined') {
   this.removeToken();
    localStorage.removeItem('refresh_token');
    localStorage.removeItem(this.USER_DATA);
    }
  }

   consultarDatosLocales() {

    if (typeof window !== 'undefined') {
      const storage: any = localStorage.getItem(this.USER_DATA)
      let data: any;
      if (storage) {
        data = JSON.parse(storage ?? storage);
      }
      this.data.next(data) ;
    }

  }

}
