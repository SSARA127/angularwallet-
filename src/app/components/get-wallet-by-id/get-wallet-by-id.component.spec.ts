import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWalletByIdComponent } from './get-wallet-by-id.component';

describe('GetWalletByIdComponent', () => {
  let component: GetWalletByIdComponent;
  let fixture: ComponentFixture<GetWalletByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetWalletByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetWalletByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
