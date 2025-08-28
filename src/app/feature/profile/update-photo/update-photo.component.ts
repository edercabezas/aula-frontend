import { Component, inject, OnInit } from '@angular/core';
import { CrudService } from '../../../core/services/crud/crud.service';
import { AlertService } from '../../../core/services/alert/alert.service';

@Component({
  selector: 'app-update-photo',
  templateUrl: './update-photo.component.html',
  styleUrl: './update-photo.component.scss',
  standalone: false,
})
export class UpdatePhotoComponent implements OnInit {

  private _crud: CrudService = inject(CrudService);
  private _alert: AlertService = inject(AlertService);

  selectedImage: string | null = null;
  allowedFormats: any = ['image/jpeg', 'image/png', 'image/webp'];
  maxSizeMB: number | any = 2;
  logoImageUrl: any;
  spinnerShow: boolean;
  constructor() {
    this.spinnerShow = false;
  }

  ngOnInit(): void {
    this._getProfile();
  }

  opeWindows(): void {
    const click = document.getElementById('fileInput');
    click?.click();
  }


    private _getProfile(): void {
    this._crud
      .getProfile()
      .then((response: any) => {
        this.logoImageUrl = response.basic_info.foto;

      })
      .catch((error: any) => {
        console.log(error);
      });
  }


onFileSelected(event: Event): void {

  const input = event.target as HTMLInputElement;
  if (!input.files?.length) return;
  const file = input.files[0];

  if (!this.allowedFormats.includes(file.type)) {
    this._alert.showToasterWarning(
      'Formato inválido. Solo se permiten JPEG, PNG, JPG'
    );
    return;
  }

  const maxSizeBytes = this.maxSizeMB * 1024 * 1024;
  if (file.size > maxSizeBytes) {
    this._alert.showToasterWarning(
      `La imagen no debe superar los ${this.maxSizeMB} MB.`
    );
    return;
  }
 this.spinnerShow = true;
  this._crud.updatePhoto(file)
    .then((response: any) => {
      if (response.status === 'success') {
        this._alert.showToasterFull(response.message);
      }

      const reader = new FileReader();
      reader.onload = () => this.logoImageUrl = reader.result as string;
      reader.readAsDataURL(file);
    })
    .catch((error: any) => {
      this._alert.showToasterError(error);
    }).finally(() => {
        setTimeout(() => {
            this.spinnerShow = false;
        }, 1500)
      });
}

}
