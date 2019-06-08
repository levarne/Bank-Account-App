import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsAccountListComponent } from './bs-account-list.component';

describe('BsAccountListComponent', () => {
  let component: BsAccountListComponent;
  let fixture: ComponentFixture<BsAccountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsAccountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
