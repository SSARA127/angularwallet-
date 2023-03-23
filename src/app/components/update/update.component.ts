import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';
import { Wallet } from 'src/model/Wallet';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [DatePipe]
})
export class UpdateComponent implements OnInit{
  wallet:Wallet=new Wallet();
  lockimagesrc="../assets/images/lock.jpg";
  iconimagesrc="../assets/images/icon.png";
  incorrect:string="";
   constructor(private route:ActivatedRoute,private router:Router,private walletService:WalletService,private walletBackEndService:WalletBackendService){}
  
   ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
      this.wallet=JSON.parse(this.route.snapshot.paramMap.get('id')!);
      console.log(this.wallet);
  }
   
   onSubmit(){
    console.log("details clicked:" + JSON.stringify(this.wallet)); 
    let walletPost: Observable<any> =this.walletBackEndService.updateWallet(this.wallet,this.wallet.password!);
    walletPost.subscribe(
      {
        next:(data)=>{ // executes when back end reposnds with success status code
          console.log(data);
          this.incorrect= "Successfully Wallet Updated!";
          window.alert(this.incorrect);
          this.router.navigate(['operationsbutton',this.incorrect]);
        },
        error:(error)=>{ // executes when back end responds with error status code
          console.log(error);
    
        },
        complete:()=>{ //
          console.log("Put request Completed...")
        }
      }
    )
    
  }
}
