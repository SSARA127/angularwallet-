import { Component } from '@angular/core';
import { Wallet } from 'src/model/Wallet';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
wallet:Wallet=new Wallet();
incorrect:string="";
message:string="";
displayDetails(){
  window.alert("Form Submitted Successfully!");
}
}
