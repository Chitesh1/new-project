import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectMonth: string= ' ';
  title = 'new-project';
  
  mycomponent = "This Is Main Component";
  
   todaydate ;
   componentproperty;
   months=["January","Febuary","March","April","May","June","July","August",
                "September","October","November","December"];
    jsonval={name:'ankit',age:'26',address:{a1:'Mumbai',a2:'karnataka'}}            
    isavailable = true;
 
   clickFunction(event){
    alert("Button Is Clicked");
    console.log(event); 
  }
  
  changeFunction(event: any){
  this.selectMonth=event.target.value;
  // alert("Month Changed To ");
   console.log(event);
   }
   
   constructor(private myservice:MyserviceService){       }
   
   ngOnInit(){
   
    this.todaydate = this.myservice.showTodayDate();
    this.myservice.serviceproperty = "Property of Call Data Changes";
    this.componentproperty = this.myservice.serviceproperty;
    
   }
}
