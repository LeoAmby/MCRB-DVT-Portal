import { Component, signal } from '@angular/core';
import { RouterOutlet, Routes, RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dvt-metropol');

};
