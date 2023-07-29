import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundSvgComponent } from './background-svg.component';

describe('BackgroundSvgComponent', () => {
  let component: BackgroundSvgComponent;
  let fixture: ComponentFixture<BackgroundSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
