import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../../core/services/crud/crud.service';
import { AlertService } from '../../../core/services/alert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.scss',
  standalone: false,
})
export class UpdateProfileComponent implements OnInit {
  private _fb: FormBuilder = inject(FormBuilder);
  private _crud: CrudService = inject(CrudService);
  private _alert: AlertService = inject(AlertService);
   private _route: Router = inject(Router);
  profileForm!: FormGroup;

  spinnerShow: boolean;

  constructor() {
    this.spinnerShow = false;
  }

  ngOnInit(): void {
    this.setForm();
    this._getProfile();
  }

  private _getProfile(): void {
    this._crud
      .getProfile()
      .then((response: any) => {
        this.setDataPRofile(response)
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  setForm(): void {
    this.profileForm = this._fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      tipo_usuario: ['', [Validators.required]],
      biografia: ['', [Validators.required]],
      documento: ['', [Validators.required]],
      linkedin: ['', [Validators.required]],
      twitter: ['', [Validators.required]],
      github: ['', [Validators.required]],
      sitio_web: ['', [Validators.required]],
      esta_verificado: ['', [Validators.required]],
    });
  }

  setDataPRofile(data: any): void {
    this.profileForm.controls['first_name'].setValue(data?.basic_info?.first_name || '');
    this.profileForm.controls['last_name'].setValue(data?.basic_info?.last_name || '');
    this.profileForm.controls['telefono'].setValue(data?.basic_info?.telefono || '');
    this.profileForm.controls['tipo_usuario'].setValue(data?.tipo_usuario || '');
    this.profileForm.controls['biografia'].setValue(data?.basic_info?.biografia || '');
    this.profileForm.controls['documento'].setValue(data?.basic_info?.documento || '');
    this.profileForm.controls['linkedin'].setValue(data?.basic_info?.redes_sociales?.linkedin || '');
    this.profileForm.controls['twitter'].setValue(data?.basic_info?.redes_sociales?.twitter || '');
    this.profileForm.controls['github'].setValue(data?.basic_info?.redes_sociales?.github || '');
    this.profileForm.controls['sitio_web'].setValue(data?.basic_info?.redes_sociales?.sitio_web || '');
    this.profileForm.controls['esta_verificado'].setValue(!!data?.esta_verificado || '');
  }
  onSubmit(): void {
    this.spinnerShow = true;
    const data = this.returData();

    this._crud.updateProfile(data)
      .then((response: any) => {
        if (response) {
          this._alert.showToasterFull('Perfil actualizado exitosamente');
        }
      })
      .catch((error: any) => {
        this._alert.showToasterError(error.message)
      }).finally(() => {
        setTimeout(() => {
            this.spinnerShow = false;
        }, 1500)
      });
  }


    returData(): any {
      return {
       usergggg: {
        first_name: this.profileForm.get('first_name')?.value,
        last_name:  this.profileForm.get('last_name')?.value,
       },
       telefono: this.profileForm.get('telefono')?.value,
       tipo_usuario: this.profileForm.get('tipo_usuario')?.value,
       biografia: this.profileForm.get('biografia')?.value,
       documento: this.profileForm.get('documento')?.value,
       linkedin: this.profileForm.get('linkedin')?.value,
       twitter: this.profileForm.get('twitter')?.value,
       github: this.profileForm.get('github')?.value,
       sitio_web: this.profileForm.get('sitio_web')?.value,
       esta_verificado: !!this.profileForm.get('esta_verificado')?.value,
      }
    }

   public profile(): void {
   this._route.navigate(['profile', 'updae-profile']);
  }
}
