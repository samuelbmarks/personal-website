import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeArrowsComponent } from './theme-arrows.component';

describe('ThemeArrowsComponent', () => {
  let component: ThemeArrowsComponent;
  let fixture: ComponentFixture<ThemeArrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeArrowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
