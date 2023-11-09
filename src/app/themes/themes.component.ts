import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
  
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.changeTheme('theme-light');
  }

  public changeTheme(theme: string) {
    const buttons = document.querySelectorAll('.theme-button');
    buttons.forEach(btn => btn.classList.remove('selected-theme'));
    const themeButton = document.querySelector('.' + theme)!;
    if (themeButton) {
      themeButton.classList.add('selected-theme');
    }

    this.themeService.changeTheme(theme);
  }
}
