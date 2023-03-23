import { Component } from '@angular/core';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';
import { Wallet } from 'src/model/Wallet';
import { Router } from '@angular/router';
import { AuthenticationserviceService } from 'src/app/service/authenticationservice.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private walletService:WalletService,private authService:AuthenticationserviceService,private walletBackEndService:WalletBackendService,private router:Router){}
  wallet:Wallet=new Wallet();
  
  lockimagesrc="../assets/images/lock.jpg";
  iconimagesrc="../assets/images/icon.png";
  incorrect:string="";
  ngOnInit(): void {
    this.authService.getUserInfo().subscribe(
      {
        next:(data)=>{
          console.log(data);  
          this.wallet= data;

        },
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }
}
