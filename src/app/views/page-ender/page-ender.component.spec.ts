import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEnderComponent } from './page-ender.component';

describe('PageEnderComponent', () => {
  let component: PageEnderComponent;
  let fixture: ComponentFixture<PageEnderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEnderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEnderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
