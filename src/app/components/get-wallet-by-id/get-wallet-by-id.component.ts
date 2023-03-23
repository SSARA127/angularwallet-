import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { Wallet } from 'src/model/Wallet';

@Component({
  selector: 'app-get-wallet-by-id',
  templateUrl: './get-wallet-by-id.component.html',
  styleUrls: ['./get-wallet-by-id.component.css']
})
export class GetWalletByIdComponent {
  constructor(private router:Router,private walletBackEndService:WalletBackendService){}
  wallet:Wallet=new Wallet();
  getwallet:Wallet=new Wallet();
  incorrect:string="";
  lockimagesrc="../assets/images/lock.jpg";
  iconimagesrc="../assets/images/icon.png";

  displayDetails(){
    let walletPost: Observable<any> =this.walletBackEndService.getWalletById(this.wallet.id!,this.wallet.password!);
    walletPost.subscribe(
      {
        next:(data)=>{ // executes when back end reposnds with success status code
          console.log(data);
          this.getwallet=data;
          if(this.wallet.password==this.getwallet.password){
            this.router.navigate(['display',JSON.stringify(this.getwallet)]);
            this.incorrect= "";
          }
          else 
            this.incorrect= "Incorrect UserId or Password";
          
        },
        error:(error)=>{ // executes when back end responds with error status code
          console.log(error);
          this.incorrect= "Incorrect UserId or Password";
        },
        complete:()=>{ //
          console.log("Get request Completed...")
        }
      }
    )
    console.log("displayDetails()");
    console.log("details clicked:" + JSON.stringify(this.wallet));
    
    }
  }

