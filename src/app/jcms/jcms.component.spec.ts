import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JcmsComponent } from './jcms.component';

describe('JcmsComponent', () => {
  let component: JcmsComponent;
  let fixture: ComponentFixture<JcmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JcmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JcmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
