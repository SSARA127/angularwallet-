import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { Wallet } from 'src/model/Wallet';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  constructor(private router:Router,private walletBackEndService:WalletBackendService){}
  wallet:Wallet=new Wallet();
  getwallet:Wallet=new Wallet();
  lockimagesrc="../assets/images/lock.jpg";
  iconimagesrc="../assets/images/icon.png";
  incorrect:string="";
  displayDetails(){
    let walletPost: Observable<any> =this.walletBackEndService.withdrawAmount(this.wallet.id!,this.wallet.balanceamount!,this.wallet.password!);
    walletPost.subscribe(
      {
        next:(data)=>{ // executes when back end reposnds with success status code
          console.log(data);
          this.getwallet=data;
          if(this.wallet.password==this.getwallet.password){
            this.incorrect= "Successfully Amount withdrawn!";
            window.alert(this.incorrect);
            this.router.navigate(['operationsbutton',this.incorrect]);
          }
          else 
            this.incorrect= "Incorrect UserId or Password";
          
        },
        error:(error)=>{ // executes when back end responds with error status code
          console.log(error);
          this.incorrect= "Incorrect UserId or Password";
        },
        complete:()=>{ //
          console.log("Post request Completed...")
        }
      }
    )
    console.log("displayDetails()");
    console.log("details clicked:" + JSON.stringify(this.wallet));
    
    }
}
