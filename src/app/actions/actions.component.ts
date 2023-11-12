import { Component } from '@angular/core';
import { AnimationService } from '../animation.service';
import { animation } from '@angular/animations';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {

  constructor(private animationService: AnimationService) {}

  public updateAnimations() {
    this.animationService.updateAnimations();
  }
}
