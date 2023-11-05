import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor() {}

  ngOnInit() {
    const buttons = document.querySelectorAll('.nav-button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove 'selected' class from all buttons
        buttons.forEach(btn => btn.classList.remove('selected'));
  
        // Add 'selected' class to the clicked button
        button.classList.add('selected');
      });
    });
  
    // Initially select the 'home' button
    const homeButton = document.querySelector('.home');
    homeButton?.classList.add('selected');
  }
}
