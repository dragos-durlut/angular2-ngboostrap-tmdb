import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-movie-card]',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  public randomNumber: number;

  constructor() {
    this.randomNumber = this.randomIntFromInterval(100, 1000);
  }

  ngOnInit(): void {
  }

  private randomIntFromInterval(min, max): number { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
}
