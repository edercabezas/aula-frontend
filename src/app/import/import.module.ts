import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatOption } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbar,
    MatMenuTrigger,
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatIconModule,
    RouterLink,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    MatDividerModule
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbar,
    MatMenuTrigger,
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatIconModule,
    RouterLink,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatOption,
    MatSelectModule,
    FormsModule,
    MatDividerModule
  ]
})
export class ImportModule { }
