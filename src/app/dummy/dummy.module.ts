import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyComponent } from './dummy/dummy.component';
import { DummyRoutingModule } from './dummy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DummyRoutingModule
  ],
  declarations: [DummyComponent]
})
export class DummyModule { }
