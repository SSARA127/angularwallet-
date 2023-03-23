import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationserviceService } from 'src/app/service/authenticationservice.service';
import { Wallet } from 'src/model/Wallet';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router,private authService: AuthenticationserviceService){}
  wallet:Wallet=new Wallet(); 
  id:number | string="";
  lockimagesrc="../assets/images/lock.jpg";
  iconimagesrc="../assets/images/greenicon.jpg";
  incorrect:string="";
  registeredid:string=this.id as string;
  register:Wallet=new Wallet();
  registeredObject:string|null="";
  displayDetails():void{
    console.log("displayDetails()");
    console.log("details clicked:" + JSON.stringify(this.wallet));

    this.authService.userLogin(this.wallet).subscribe(
      {
        next:(data)=>{
          console.log(data);
          sessionStorage.setItem("user",JSON.stringify(data));
          console.log(data.jwt);
          sessionStorage.setItem("jwt",data.jwt);
          sessionStorage.setItem("role",data.role);
          this.incorrect= "Hi, "+this.wallet.name+".You Successfully Logged to Wallet Account!";
          window.alert("Hi, "+this.wallet.name+".You Successfully Logged to Wallet Account!");
          this.router.navigate(['operationsbutton',this.incorrect]);
        },
        error:(err)=>{
          console.log(err);
          this.incorrect= "Incorrect UserId or Password";
        }
      }
    );

    // this.registeredObject=localStorage.getItem(this.registeredid);
    // if(this.registeredObject!=null){
    //     this.register=JSON.parse(this.registeredObject);
    //     console.log(this.wallet.password);
    //     console.log(this.register.password);
    //     if(this.wallet.password==this.register.password){
    //         this.incorrect= "Hi, "+this.wallet.name+".You Successfully Logged to Wallet Account!";
    //         window.alert("Hi, "+this.wallet.name+".You Successfully Logged to Wallet Account!");
    //         this.router.navigate(['operationsbutton',this.incorrect]);
    //     }
    //     else 
    //         this.incorrect= "Incorrect UserId or Password";
    // }
    // else 
    //   this.incorrect= "Incorrect UserId or Password";
    

  }
}
