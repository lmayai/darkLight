import { Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  theme = 'dark';
  @Output() themeSelected: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.emitThemeChange(this.theme);
  }

  onSelectTheme(theme: string) {
    this.emitThemeChange(theme);
  }

  emitThemeChange(theme) {
    this.theme = theme;
    this.themeSelected.emit(theme);
  }

}
