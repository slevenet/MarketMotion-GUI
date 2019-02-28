import { Component } from '@angular/core';
import {Service, StockPrice} from './market.service';
@Component({
  selector: 'app-marker',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],
  providers: [Service]
})
export class MarketComponent {
  stockPrices: StockPrice[];

  dt = new Date(1994, 2, 4);

  constructor(service: Service) {
    this.stockPrices = service.getStockPrices();
  }
  customizeTooltip(arg) {
    return {
      text: 'Open: $' + arg.openValue + '<br/>' +
        'Close: $' + arg.closeValue + '<br/>' +
        'High: $' + arg.highValue + '<br/>' +
        'Low: $' + arg.lowValue + '<br/>'
    };
  }
}
