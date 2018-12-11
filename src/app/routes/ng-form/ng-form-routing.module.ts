import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgFormTemplateFormComponent } from './template-form/template-form.component';
import { NgFormReactiveFormsComponent } from './zorro-reactive-forms/reactive-forms.component';

const routes: Routes = [
  { path: 'reactive-forms', component: NgFormReactiveFormsComponent },
  { path: 'template-form', component: NgFormTemplateFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgFormRoutingModule {}
