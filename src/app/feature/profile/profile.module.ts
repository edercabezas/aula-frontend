import { NgModule } from '@angular/core';
import { UpdatePhotoComponent } from './update-photo/update-photo.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ImportModule } from '../../import/import.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    UpdatePhotoComponent,
    UpdateProfileComponent,
    ViewProfileComponent
  ],
  imports: [
    ImportModule,
    ProfileRoutingModule,
    SharedModule
],
  exports: [
    UpdatePhotoComponent,
    UpdateProfileComponent,
    ViewProfileComponent
  ]
})
export class ProfileModule { }
