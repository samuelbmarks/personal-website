import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavArrowsComponent } from './nav-arrows.component';

describe('NavArrowsComponent', () => {
  let component: NavArrowsComponent;
  let fixture: ComponentFixture<NavArrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavArrowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
