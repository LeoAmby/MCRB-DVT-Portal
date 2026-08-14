import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone:true,
})
export class Login {
  username = "";

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