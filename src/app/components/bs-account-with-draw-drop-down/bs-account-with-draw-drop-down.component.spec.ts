import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsAccountWithDrawDropDownComponent } from './bs-account-with-draw-drop-down.component';

describe('BsAccountWithDrawDropDownComponent', () => {
  let component: BsAccountWithDrawDropDownComponent;
  let fixture: ComponentFixture<BsAccountWithDrawDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsAccountWithDrawDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsAccountWithDrawDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
