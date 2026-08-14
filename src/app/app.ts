import { Component, signal } from '@angular/core';
import { RouterOutlet, Routes, RouterLink } from '@angular/router';
import { Login } from './login/login';
import { Learning } from './learning/learning';
import { ForgotPassword } from './forgot-password/forgot-password';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Login, Learning, ForgotPassword,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dvt-metropol');

}

export const routes:Routes = [
  {path: 'login', component:Login},
  {path: 'forgot-password', component:ForgotPassword},

];
