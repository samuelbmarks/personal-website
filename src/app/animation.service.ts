import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  private introAniClass = "a-scale-";
  private bAniClass = "b-scale-ani";
  
  private introAnimationsRemoved = false;

  constructor() {}

  public updateAnimations() {
    if (!this.introAnimationsRemoved) {
      console.log('removing all intro animation');
      for (let i = 0; i <= 20; i++) {
        const aniClass = this.introAniClass + i;
        const buttons = document.querySelectorAll('.' + aniClass)!;

        buttons.forEach(button => {
          console.log("removing (" + aniClass + ") and adding (" + this.bAniClass + ")");
          button.classList.remove(aniClass);
          button.classList.add(this.bAniClass);
        })
      }
      this.introAnimationsRemoved = true;
    }
  }
}
