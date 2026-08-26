import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
  standalone:true,
})

export class ForgotPassword {
  forgotPassForm = new FormGroup({
  
    email: new FormControl('', [
      Validators.required,
      Validators.email]),

  });
 
  forgotPass(){
    this.forgotPassForm.value
  }
}
