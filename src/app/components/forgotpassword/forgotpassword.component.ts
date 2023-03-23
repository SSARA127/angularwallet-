import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/model/Wallet';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  constructor(private router:Router){}
  wallet:Wallet=new Wallet();
  retypepassword:string|undefined;
  id:number|string="";
  lockimagesrc="../assets/images/lock.jpg";
  iconimagesrc="../assets/images/icon.png";
  incorrect:string="";
  registeredid:string=this.id as string;
  register:Wallet=new Wallet();
  registeredObject:string|null="";
  displayDetails():void{
    console.log("displayDetails()");
    console.log("details clicked:" + JSON.stringify(this.wallet));
    this.registeredObject=localStorage.getItem(this.registeredid);
    if(this.registeredObject!=null){
      if(this.wallet.password==this.retypepassword){
          this.register=JSON.parse(this.registeredObject);
          localStorage.setItem(this.registeredid,JSON.stringify(this.wallet));
          window.alert("Successfully Password Changed!");
          this.router.navigateByUrl("login");
        }
        else
          this.incorrect="Passwords are not matching,Re-enter once again";
        
    }
    else 
      this.incorrect= "Incorrect UserId or Password";
    

  }
}
