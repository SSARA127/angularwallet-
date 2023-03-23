import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsbuttonComponent } from './operationsbutton.component';

describe('OperationsbuttonComponent', () => {
  let component: OperationsbuttonComponent;
  let fixture: ComponentFixture<OperationsbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationsbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
