import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMePopupComponent } from './contact-me-popup.component';

describe('ContactMePopupComponent', () => {
  let component: ContactMePopupComponent;
  let fixture: ComponentFixture<ContactMePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactMePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
