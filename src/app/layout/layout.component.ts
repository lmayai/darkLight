import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  theme: string;

  onThemeSelected(theme) {
    this.theme = theme;
  }
}
