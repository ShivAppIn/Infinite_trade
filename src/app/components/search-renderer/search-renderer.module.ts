import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchRendererComponent } from './search-renderer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PreventKeysModule } from '../../directives/prevent-keys/prevent-keys.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    PreventKeysModule
  ],
  declarations: [
    SearchRendererComponent,
  ],
  exports: [
    SearchRendererComponent,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    PreventKeysModule
  ]

})
export class SearchRendererModule { }
