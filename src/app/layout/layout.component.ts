import { Component } from '@angular/core';
import { ConstantsService } from './../common/services/constants.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  theme: string;

  constructor(
    private constantsService: ConstantsService,
  ) {
    this.theme = constantsService.theme;
  }

  onThemeSelected(theme) {
    this.theme = theme;
  }
}
