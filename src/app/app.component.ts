import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/model/Wallet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  wallet:Wallet=new Wallet();
  logid:string|undefined=this.wallet.logoutid;
  role:string | null ="user" ;
  ngOnInit(): void {
    console.log("Role check!");
    this.role =sessionStorage.getItem("role");
  }
  
  display(){
    localStorage.removeItem(this.logid!);
    window.alert("Logout Successfully!");
  }
  userLogout() {
    console.log("User Logout!");
    sessionStorage.clear();    
    this.role =sessionStorage.getItem("role");
  }

  checkRole():string{
    let role =sessionStorage.getItem("role");

    switch(role){
      case "user":return "user"
      case "admin":return "admin"
      default:return "public"
    }
  }
}
