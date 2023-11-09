import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
    this.changeNav('nav-home');
  }

  public changeNav(nav: string) {
    if (nav == "nav-home") {
      const buttons = document.querySelectorAll('.nav-button');
      buttons.forEach(btn => btn.classList.remove('selected-nav'));
      const navButton = document.querySelector('.' + nav)!;
      if (navButton) {
        navButton.classList.add('selected-nav');
      }
    }

    if (nav == "nav-contact") {
      alert("Opps, this page is currently unavailable. Please check back soon.")
    }

    else if (nav == "nav-admin") {
      alert("Oops... It looks like you don't have access to this resource.")
    }
  }
}
