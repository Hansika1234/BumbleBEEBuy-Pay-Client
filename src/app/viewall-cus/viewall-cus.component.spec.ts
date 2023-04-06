import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallCusComponent } from './viewall-cus.component';

describe('ViewallCusComponent', () => {
  let component: ViewallCusComponent;
  let fixture: ComponentFixture<ViewallCusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallCusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
