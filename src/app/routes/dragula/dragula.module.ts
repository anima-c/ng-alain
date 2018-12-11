import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DragulaRoutingModule } from './dragula-routing.module';
import { DragulaSampleComponent } from './sample/sample.component';
import { DragulaModule } from 'ng2-dragula';

const COMPONENTS = [
  DragulaSampleComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    DragulaRoutingModule,
    DragulaModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class DragulaModuleD { }
