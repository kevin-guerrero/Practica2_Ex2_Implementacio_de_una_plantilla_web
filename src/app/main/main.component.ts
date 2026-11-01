import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
})
export class MainComponent {
    public btnInfo() {
        window.open('https://www.marvel.com/characters/spider-man-peter-parker/in-comics', '_blank');
    }
}
