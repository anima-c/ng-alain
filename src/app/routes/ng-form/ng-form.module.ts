import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NgFormRoutingModule } from './ng-form-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgFormTemplateFormComponent } from './template-form/template-form.component';
import { HeroFormComponent } from './template-form/hero-form/hero-form.component';
import { NgFormReactiveFormsComponent } from './zorro-reactive-forms/reactive-forms.component';

const COMPONENTS = [NgFormReactiveFormsComponent, NgFormTemplateFormComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    NgFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT, HeroFormComponent],
  entryComponents: COMPONENTS_NOROUNT,
})
export class NgFormModule {}
