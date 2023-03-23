import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateidComponent } from './updateid.component';

describe('UpdateidComponent', () => {
  let component: UpdateidComponent;
  let fixture: ComponentFixture<UpdateidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
