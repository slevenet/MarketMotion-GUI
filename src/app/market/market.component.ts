import { Component } from '@angular/core';
@Component({
  selector: 'app-marker',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent {
  title = '';
  type = 'CandlestickChart';
  data = [
    ['Mon', 20, 28, 38, 45],
    ['Tue', 31, 38, 55, 66],
    ['Wed', 50, 55, 77, 80],
    ['Thu', 77, 77, 66, 50],
    ['Fri', 68, 66, 22, 15]
  ];
  columnNames = ['Date', 'A', 'B', 'C', 'D'];
  options = { };
  width = 550;
  height = 400;
}
