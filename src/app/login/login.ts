import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone:true,
})
export class Login {

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),

  })

 signin(){
  this.loginForm.value
 } 
}