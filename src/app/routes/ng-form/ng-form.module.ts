import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NgFormRoutingModule } from './ng-form-routing.module';
import { NgFormReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [NgFormReactiveFormsComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, NgFormRoutingModule, ReactiveFormsModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class NgFormModule {}
