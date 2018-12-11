import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragulaSampleComponent } from './sample/sample.component';

const routes: Routes = [

  { path: 'sample', component: DragulaSampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragulaRoutingModule { }
