import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { VerifierRoutingModule } from './verifier-routing.module';
import { VerifierRandomCodeComponent } from './random-code/random-code.component';

const COMPONENTS = [
  VerifierRandomCodeComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    VerifierRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class VerifierModule { }
