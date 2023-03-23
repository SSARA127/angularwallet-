import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operationsbutton',
  templateUrl: './operationsbutton.component.html',
  styleUrls: ['./operationsbutton.component.css']
})
export class OperationsbuttonComponent implements OnInit {
  constructor(private route:ActivatedRoute){}
  name:string|null="";
  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get("incorrect")!="" && this.route.snapshot.paramMap.get("incorrect")!=":incorrect" )
    this.name=this.route.snapshot.paramMap.get("incorrect");
    else
    this.name="";
  }
  
  displayDetails(){

  }
}
