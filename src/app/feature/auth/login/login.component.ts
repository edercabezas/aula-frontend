import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { AlertService } from '../../../core/services/alert/alert.service';
import { StorageService } from '../../../core/services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: false,
})
export class LoginComponent implements OnInit {
  private _route: Router = inject(Router);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private _auth: AuthService = inject(AuthService);
  private _alert: AlertService = inject(AlertService);
  private readonly _storage: StorageService = inject(StorageService);

  hide: boolean = true;
  spinnerShow: boolean;
  loginUserForm!: FormGroup;

  constructor() {
    this.spinnerShow = false;

    if (typeof window !== 'undefined') {
      const token = this._storage.getToken();
      console.log(token)
      if (token) {
        this._route.navigate(['profile']);
      }
    }
  }
  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.loginUserForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  login(): void {
    this.spinnerShow = true;
    const data = {
      username: this.loginUserForm.get('username')?.value,
      password: this.loginUserForm.get('password')?.value,
    };

    this._auth
      .login(data)
      .then((resposne: any) => {
        if (resposne) {
          this._route.navigate(['profile']);
        }
      })
      .catch((error: any) => {
        this._alert.showToasterError(
          error.error?.detail || 'Error al iniciar sesión'
        );
      })
      .finally(() => (this.spinnerShow = false));
  }
}
