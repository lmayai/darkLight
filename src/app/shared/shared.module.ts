import { NgModule } from '@angular/core';
import { ThemeComponent } from './components/theme/theme.component';

@NgModule({
  declarations: [
    ThemeComponent
  ],
  exports: [
    ThemeComponent
  ],
  imports: [],
})
export class SharedModule {}
