import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ColorRoutingModule } from './color-routing.module';
import { ColorColorPickerComponent } from './color-picker/color-picker.component';

const COMPONENTS = [
  ColorColorPickerComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    ColorRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class ColorModule { }
