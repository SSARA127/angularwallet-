import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';
import { Wallet } from 'src/model/Wallet';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [DatePipe]
})
export class CreateComponent {
  constructor(private walletService:WalletService,private walletBackEndService:WalletBackendService,private router:Router){}
  datePipe: DatePipe = new DatePipe('en-US');
  date = new Date();
  dateofwalletcreation = this.datePipe.transform(this.date, 'yyyy-MM-dd');
  wallet:Wallet=new Wallet();
  
  lockimagesrc="../assets/images/lock.jpg";
  iconimagesrc="../assets/images/icon.png";
  incorrect:string="";
  
   onSubmit(){
    
    let walletPost: Observable<any> =this.walletBackEndService.addWallet(this.wallet);
    walletPost.subscribe(
      {
        next:(data)=>{ // executes when back end reposnds with success status code
          console.log(data);
        },
        error:(error)=>{ // executes when back end responds with error status code
          console.log(error);
        },
        complete:()=>{ //
          console.log("Post request Completed...")
        }
      }
    )
    console.log("details clicked:" + JSON.stringify(this.wallet));
    this.incorrect="Successfully Wallet Created!";
    window.alert(this.incorrect);
      this.router.navigate(['operationsbutton',this.incorrect]);
    this.walletService.addWallet(this.wallet);
  }
}
