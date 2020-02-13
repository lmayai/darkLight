import { Component, Output, EventEmitter, OnInit} from '@angular/core';
import { ConstantsService } from 'src/app/common/services/constants.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  theme: string;
  @Output() themeSelected: EventEmitter<any> = new EventEmitter();

  constructor(
    private constantsService: ConstantsService,
  ) {
    this.theme = constantsService.theme;
  }

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
