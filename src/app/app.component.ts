import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  imports: [RouterOutlet, NavbarComponent],
  selector: 'app-root',
  standalone:  true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected readonly title = signal('practica3_ex1');
}
