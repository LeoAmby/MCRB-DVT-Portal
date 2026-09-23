import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { 
  FormGroup, 
  FormControl, 
  ReactiveFormsModule, 
  Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  imports: [ 
    RouterLink, 
    ReactiveFormsModule, 
    NgIf
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {

  private _http = inject(HttpClient);
  public get http() {
    return this._http;
  }
  public set http(value) {
    this._http = value;
  }
private router = inject(Router);

  [x: string]: any;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required]),
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

  console.log('1. Signing function started');

  if(this.loginForm.invalid) {
    console.log('2. Form is INVALID');
    this.loginForm.markAllAsTouched();
    return;
  }

  console.log('2. Form is VALID');
  const email = this.loginForm.getRawValue().email;
  const password = this.loginForm.getRawValue().password;

  console.log('3. Email:', email);
  console.log('4. password:', password);

  console.log('5. sending request to API...');


  //METROPOL API: http://192.168.20.188/api/v1/datasubmission/login
  this.http.post<any>('https://dummyjson.com/auth/login', {
    username: email, 
    password: password}).subscribe({
    next: (res) => {
      console.log('6. API SUCCESS');
      console.log('7. API response:', res);

      const access_token = res.accessToken

      console.log('8. Access token', access_token);

      localStorage.setItem('access_token', access_token)

      console.log('9. Navigating to user-management...');

      this.router.navigate(['/user-management'])
      .then(success => {
        console.log('10. Navigation result:', success);
      })
      .catch(error => {
        console.error('10. Navigation failed:', error);
      });
    },

    error: (err) => {
      console.error('API ERROR:', err);
    }

  })
 } 
}