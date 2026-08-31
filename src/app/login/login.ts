import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone:true,
})
export class Login {

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15)]),

  })

  get email(){
    return this.loginForm.get('email')
  }
 
  get password(){
    return this.loginForm.get('password')
  }

 signin(){
  console.log(this.loginForm.value);
  const username = this.loginForm.getRawValue().email;
  const password = this.loginForm.getRawValue().password;

  this.http.post<any>('http:192.168.20.188/api/v1/datasubmission/login', {email: this.email, password: this.password}).subscribe({
    next: (res) => {
      const access_token = res.access_token

      localStorage.setItem('access_token', access_token)

      this.router.navigate(['/user-management']);
    },

    error: (err) => {
      
    }

  })
 } 
}