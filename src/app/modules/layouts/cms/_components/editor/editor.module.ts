import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SafeModule } from '../../../../../pipes/safe/safe.module';
import { DataLoaderModule } from '../../../../../components/data-loader/data-loader.module';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    SafeModule,
    DataLoaderModule
  ],
  exports: [
    EditorComponent,
    SafeModule,
    DataLoaderModule
  ]
})
export class EditorModule { }
