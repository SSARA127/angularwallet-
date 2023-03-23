import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { Wallet } from 'src/model/Wallet';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  constructor(private route:ActivatedRoute,private walletBackEndService:WalletBackendService){}
  wallet:Wallet[]=[];
  getvalue:string|null="";
  ngOnInit(): void {
    this.getvalue=this.route.snapshot.paramMap.get('wallet');
    console.log(this.getvalue);
    if(this.getvalue=="wallet"){
      this.walletBackEndService.getAllWallets("1").subscribe(
        {
          next:(data)=>{ // executes when back end reposnds with success status code
            console.log(data);
            this.wallet=data;
          },
          error:(error)=>{ // executes when back end responds with error status code
            console.log(error);
            
          },
          complete:()=>{ //
            console.log("get request Completed...")
          }
        }
      )
    }
    else{
      console.log(this.route.snapshot.paramMap.get('wallet'));
      this.wallet[0]=JSON.parse(this.route.snapshot.paramMap.get('wallet')!);
      console.log(this.wallet[0]);
      
    }
  }
  
}
