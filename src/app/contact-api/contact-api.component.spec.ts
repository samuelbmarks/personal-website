import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactApiComponent } from './contact-api.component';

describe('ContactApiComponent', () => {
  let component: ContactApiComponent;
  let fixture: ComponentFixture<ContactApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
