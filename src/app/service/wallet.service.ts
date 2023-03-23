import { Injectable, OnInit } from '@angular/core';
import { Wallet } from 'src/model/Wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService implements OnInit{
  wallet:Wallet[]=[];
  registeredwallet:Wallet[]=[];
  constructor() { }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  getAllWallets():Wallet[]{
    return this.wallet;
  }
  addWallet(newWallet:Wallet):void{

    this.wallet.push(newWallet);
  }
  addRegisteredWallet(newRegisteredWallet:Wallet):void{

    this.wallet.push(newRegisteredWallet);
  }

}
