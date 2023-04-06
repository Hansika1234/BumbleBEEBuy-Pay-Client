import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusRegisterComponent } from './cus-register.component';

describe('CusRegisterComponent', () => {
  let component: CusRegisterComponent;
  let fixture: ComponentFixture<CusRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
