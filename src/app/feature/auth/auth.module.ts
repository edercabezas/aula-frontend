import { NgModule } from '@angular/core';
import { ImportModule } from '../../import/import.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from "../../shared/shared.module";
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ImportModule,
    SharedModule,
    AuthRoutingModule
],
  exports: [
     LoginComponent
  ]
})
export class AuthModule { }
