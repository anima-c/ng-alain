import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ColorRoutingModule } from './color-routing.module';
import { ColorColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPickerModule } from 'ngx-color-picker';

const COMPONENTS = [ColorColorPickerComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, ColorRoutingModule, ColorPickerModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class ColorModule {}
