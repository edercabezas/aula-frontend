import { NgModule } from '@angular/core';
import { SpinerComponent } from './spiner/spiner.component';
import { ImportModule } from '../import/import.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    SpinerComponent,
    HeaderComponent
  ],
  imports: [
   ImportModule
  ],
  exports: [
    SpinerComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
