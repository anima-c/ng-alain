import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorColorPickerComponent } from './color-picker/color-picker.component';

const routes: Routes = [

  { path: 'color-picker', component: ColorColorPickerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorRoutingModule { }
