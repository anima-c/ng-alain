import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgFormReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [

  { path: 'reactive-forms', component: NgFormReactiveFormsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgFormRoutingModule { }
