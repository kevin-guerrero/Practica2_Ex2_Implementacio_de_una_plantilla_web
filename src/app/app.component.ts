import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  imports: [RouterOutlet, HeaderComponent],
  selector: 'app-root',
  standalone:  true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected readonly title = signal('practica3_ex1');
}
