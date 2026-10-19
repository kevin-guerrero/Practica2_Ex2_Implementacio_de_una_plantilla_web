import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  imports: [HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('practica2_ex2');
}
