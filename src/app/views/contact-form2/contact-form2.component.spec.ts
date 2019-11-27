import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactForm2Component } from './contact-form2.component';

describe('ContactForm2Component', () => {
  let component: ContactForm2Component;
  let fixture: ComponentFixture<ContactForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
