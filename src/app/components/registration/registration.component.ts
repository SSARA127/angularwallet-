import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';
import { Wallet } from 'src/model/Wallet';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [DatePipe]
})
export class RegistrationComponent {
  
  wallet:Wallet=new Wallet();
  id:number|string="";
  retypepassword="";
  lockimagesrc="../assets/images/lock.jpg";
  iconimagesrc="../assets/images/icon.png";
  incorrect:string="";
   constructor(private walletService:WalletService,private router:Router){}
   registeredid:string=this.id as string;
   onSubmit(){
    console.log("details clicked:" + JSON.stringify(this.wallet));
    //this.walletService.addRegisteredWallet(this.wallet);

    localStorage.setItem(this.registeredid,JSON.stringify(this.wallet));

    if((this.wallet.password)?.match(this.retypepassword)){
      
        this.incorrect= "Successfully Registered!";
        window.alert(this.incorrect);
        this.router.navigate(['operationsbutton',this.incorrect]);
    }
    else
        this.incorrect="Password not similar,Retype once again";
   }
}
