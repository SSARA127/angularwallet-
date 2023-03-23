import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { Wallet } from 'src/model/Wallet';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  constructor(private router:Router,private walletBackEndService:WalletBackendService){}
  wallet:Wallet=new Wallet();
  fromid:number | undefined;
  toid:number | undefined;
  getwallet:Wallet=new Wallet();
  lockimagesrc="../assets/images/lock.jpg";
  iconimagesrc="../assets/images/icon.png";
  incorrect:string="";
  displayDetails(){
    this.walletBackEndService.getWalletById(this.wallet.fromid!,this.wallet.password!).subscribe(

      {
        next: (data) => {
          this.getwallet = data;
          console.log(data);

        },
        error: (error) => {
          console.log(Error);

        }
      }
    )
    let walletPost: Observable<any> =this.walletBackEndService.transferAmount(this.wallet.fromid!,this.wallet.toid!,this.wallet.balanceamount!,this.wallet.password!);
    walletPost.subscribe(
      {
        next:(data)=>{ // executes when back end reposnds with success status code
          console.log(data);
          if(this.wallet.password==this.getwallet.password){
            this.incorrect= "Successfully Amount Transfered!";
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
