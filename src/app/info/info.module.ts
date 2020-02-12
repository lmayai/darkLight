import { NgModule } from '@angular/core';
import { InfoComponent } from './components/info/info.component';
import { InfoRoutingModule } from './info-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule
  ],
  exports: [],
})
export class InfoModule {}
