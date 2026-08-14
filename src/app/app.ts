import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Learning } from './learning/learning';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Learning],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dvt-metropol');
}
