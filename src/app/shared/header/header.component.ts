import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../core/services/storage/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false,
})
export class HeaderComponent implements OnInit {
  private _router: Router = inject(Router);
  private readonly _storage: StorageService = inject(StorageService);
  spinnerShow: boolean;
  dataUSer: any = null;

  constructor() {
    this.spinnerShow = false;
  }
  ngOnInit(): void {
    this.getDataStorage();
  }

  public logoutSection(): void {
    this.spinnerShow = true;
    this._storage.logout();
    setTimeout(() => {
      this._router.navigateByUrl('/');
      this.spinnerShow = false;
    }, 2000);
  }

  profileUser(): void {
    this._router.navigate(['profile']);
  }

  getDataStorage(): void {
    this._storage.currentMessage.subscribe((response) => {
      this.dataUSer = response;
    });
  }
}
