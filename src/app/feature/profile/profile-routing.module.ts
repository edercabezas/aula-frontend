import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdatePhotoComponent } from './update-photo/update-photo.component';


const routes: Routes = [
  {
    path: '',
    component: ViewProfileComponent
  },
  {
    path: 'updae-profile',
    component: UpdateProfileComponent
  },
  {
    path: 'update-photo',
    component: UpdatePhotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
