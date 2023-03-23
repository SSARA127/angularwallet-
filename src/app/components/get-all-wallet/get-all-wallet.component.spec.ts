import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllWalletComponent } from './get-all-wallet.component';

describe('GetAllWalletComponent', () => {
  let component: GetAllWalletComponent;
  let fixture: ComponentFixture<GetAllWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
