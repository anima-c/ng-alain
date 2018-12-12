import { NgFormReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgFormTemplateFormComponent } from './template-form/template-form.component';
import { NgFormZorroReactiveFormsComponent } from './zorro-reactive-forms/reactive-forms.component';

const routes: Routes = [
  { path: 'reactive-forms', component: NgFormReactiveFormsComponent },
  { path: 'template-form', component: NgFormTemplateFormComponent },
  {
    path: 'zorro-reactive-forms',
    component: NgFormZorroReactiveFormsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgFormRoutingModule {}
