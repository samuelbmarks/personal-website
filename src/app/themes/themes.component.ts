import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {
  
  constructor(private appComponent: AppComponent) {}

  ngOnInit() {
    const buttons = document.querySelectorAll('.theme-button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove 'selected' class from all buttons
        buttons.forEach(btn => btn.classList.remove('selected'));
  
        // Add 'selected' class to the clicked button
        button.classList.add('selected');
      });
    });
  
    // Initially select the 'light' button
    const lightButton = document.querySelector('.light');
    lightButton?.classList.add('selected');
  }

  public changeTheme(theme: string) {
    this.appComponent.changeTheme(theme);
  }
}