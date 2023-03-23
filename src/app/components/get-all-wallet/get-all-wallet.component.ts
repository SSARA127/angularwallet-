import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { Wallet } from 'src/model/Wallet';

@Component({
  selector: 'app-get-all-wallet',
  templateUrl: './get-all-wallet.component.html',
  styleUrls: ['./get-all-wallet.component.css']
})
export class GetAllWalletComponent {
  constructor(private router:Router,private walletBackEndService:WalletBackendService){}
  wallet:Wallet=new Wallet();
  id:number | string="";
 name:string="";
  password:String="";
  lockimagesrc="../assets/images/lock.jpg";
  iconimagesrc="../assets/images/icon.png";
  incorrect:string="";
  registeredid:string=this.id as string;
  register:Wallet=new Wallet();
  registeredObject:string|null="";
  displayDetails(){
    console.log("displayDetails()");
    console.log("details clicked:" + JSON.stringify(this.wallet));
    
    this.registeredObject=localStorage.getItem(this.registeredid);
    
    if(this.registeredObject!=null){
      this.register=JSON.parse(this.registeredObject);
      console.log(this.wallet.password);
    console.log(this.register.password);
      if(this.wallet.password==this.register.password){
        this.router.navigate(['display',"wallet"]);
        this.incorrect= "";
      }
      else 
      this.incorrect= "Incorrect UserId or Password";
    }
    else 
      this.incorrect= "Incorrect UserId or Password";
    }
  }

