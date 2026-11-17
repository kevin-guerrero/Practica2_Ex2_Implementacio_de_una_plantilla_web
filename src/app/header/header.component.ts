import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  imports: [NavbarComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
