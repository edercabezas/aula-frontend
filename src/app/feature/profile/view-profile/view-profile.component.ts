import { Component, inject, OnInit } from '@angular/core';
import { CrudService } from '../../../core/services/crud/crud.service';
import { ProfileInterface } from '../../../core/interface/profile.interface';
import { Router } from '@angular/router';
import { StorageService } from '../../../core/services/storage/storage.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.scss',
  standalone: false,
})
export class ViewProfileComponent implements OnInit {
  private _crud: CrudService = inject(CrudService);
  private _route: Router = inject(Router);
  private readonly _storage: StorageService = inject(StorageService);
  dataProfile!: ProfileInterface;

  constructor() {}

  ngOnInit(): void {
     this._getProfile();
  }

  private _getProfile(): void {
    this._crud
      .getProfile()
      .then((response: any) => {
        console.log('Perfil cargado ✅', response);
        this.dataProfile = response;
        this._storage.setDataUser(response.basic_info)
        this._storage.changeMessage();
      })
      .catch((error: any) => {
        console.error('❌ Error al cargar perfil:', error);
      });
  }

  normalizeMedia(path?: string): string {
    if (!path) return '/assets/images/default-avatar.png';
    return path.startsWith('/') ? path : `/${path}`;
  }

  public editProfile(): void {
    this._route.navigate(['profile', 'updae-profile']);
  }

  public editPhoto(): void {
    this._route.navigate(['profile', 'update-photo']);
  }
}
