import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  private navs = [
    "nav-home", "nav-contact", "nav-admin"
  ];

  private currentNav = "";

  constructor() {}

  ngOnInit() {
    this.changeNav('nav-home');
  }

  public clickNav(theme: string) {
    this.changeNav(theme);
  }

  private changeNav(nav: string) {
    if (window.innerWidth >= 901 || this.currentNav != nav) {
      this.updateNav(nav);
    }

    else if (window.innerWidth <= 900 && this.currentNav == nav) {
      const index = (this.navs.indexOf(nav) + 1) % this.navs.length;
      const newNav = this.navs[index];
      this.updateNav(newNav);
    }
  }

  private updateNav(nav: string) {
    if (nav == "nav-home") {
      const buttons = document.querySelectorAll('.nav-button');
      buttons.forEach(btn => btn.classList.remove('selected-nav'));
      const navButton = document.querySelector('.' + nav)!;
      if (navButton) {
        navButton.classList.add('selected-nav');
      }
      this.currentNav = nav;
    }

    if (nav == "nav-contact") {
      alert("Opps, this page is currently unavailable. Please check back soon.")
    }

    else if (nav == "nav-admin") {
      alert("Oops, it looks like you don't have access to this resource.")
    }
  }
}