import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { RouterModule, Routes } from '@angular/router';
import { AddEditFaqComponent } from '../../_components/add-edit-faq/add-edit-faq.component';
import { FaqDetailsComponent } from '../../_components/faq-details/faq-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableRendererModule } from '../../../../../components/mat-table-renderer/mat-table-renderer.module';
import { MatDialogModule } from '@angular/material/dialog';
import { QuillModule } from 'ngx-quill';
import { CmsService } from '../../_service/cms.service';
import { SafeModule } from '../../../../../pipes/safe/safe.module';
import { NumberModule } from '../../../../../directives/number/number.module';
import { EmptyValueModule } from '../../../../../pipes/empty-value/empty-value.module';

const inrRoutes: Routes = [
  { path: '', component: FaqComponent }
];

@NgModule({
  declarations: [FaqComponent, AddEditFaqComponent, FaqDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    ReactiveFormsModule,
    MatTableRendererModule,
    MatDialogModule,
    SafeModule,
    NumberModule,
    EmptyValueModule,
    QuillModule.forRoot()
  ],
  providers: [CmsService]
})
export class FaqModule { }
