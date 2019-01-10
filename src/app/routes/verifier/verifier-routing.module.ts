import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifierRandomCodeComponent } from './random-code/random-code.component';

const routes: Routes = [

  { path: 'random-code', component: VerifierRandomCodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifierRoutingModule { }
