import { Component } from '@angular/core';
import { AnimationService } from '../animation.service';

@Component({
  selector: 'app-jcms',
  templateUrl: './jcms.component.html',
  styleUrls: ['./jcms.component.scss']
})
export class JcmsComponent {

  constructor(private animationService: AnimationService) {}
  
  public updateAnimations() {
    this.animationService.updateAnimations();
  }
}
