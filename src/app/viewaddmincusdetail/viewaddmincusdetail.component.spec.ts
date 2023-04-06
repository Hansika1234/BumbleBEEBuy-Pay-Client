import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaddmincusdetailComponent } from './viewaddmincusdetail.component';

describe('ViewaddmincusdetailComponent', () => {
  let component: ViewaddmincusdetailComponent;
  let fixture: ComponentFixture<ViewaddmincusdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewaddmincusdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewaddmincusdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
