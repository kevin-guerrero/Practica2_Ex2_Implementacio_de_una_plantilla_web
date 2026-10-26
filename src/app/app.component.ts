import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Footer } from './footer/footer.component';

@Component({
  imports: [HeaderComponent, Footer],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('practica2_ex2');
}
