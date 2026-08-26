import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-forgot-password',
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
  standalone:true,
})

export class ForgotPassword {
  forgotPassForm = new FormGroup({
  
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),

  });
 
  get email(){
    return this.forgotPassForm.get('email');
  }
  forgotPass(){
    this.forgotPassForm.value
  }
}
