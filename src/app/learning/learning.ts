import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  imports: [],
  templateUrl: './learning.html',
  styleUrl: './learning.css',
  standalone:true,
})
export class Learning { 
    username="";
    color = 'orange';

    // getUserName(event: Event){
    //   console.log(event);

    // }
    handleColor(val:string){
      console.log("Button clicked");
      this.color=val;
    }


    changeColor(event:Event ){
    this.color = (event.target as HTMLInputElement).value
    }


    display=true;
  
    students = [
      {name:'Leo', age: 40, email:'leo@menubar.com'},
      {name:'Faith', age: 30, email:'faith@menubar.com'},
      {name:'Delan', age: 20, email:'delan@menubar.com'},
      {name:'Amos', age: 43, email:'amos@menubar.com'},
  
    ]
  
    enterUsrName(event:Event){
      console.log(event)
    }
  
    show(){
    this.display = true;
  }
  
  hide(){
    this.display = false;
  }
  
  toggle(){
    this.display=!this.display
  }
  
  
  }
