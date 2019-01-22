import { Component, OnInit } from '@angular/core';
import {OrderBookChart} from '../model/order-book-chart';
import {OrderBookChartData} from '../model/order-book-chart-data';
import {OrderBookBucket} from '../model/order-book-bucket';
import {OrderBook} from '../model/order-book';
import {BarDataset} from '../model/bar-dataset';
import {OrderBookService} from '../services/order-book.service';

@Component({
  selector: 'app-order-book-chart',
  templateUrl: './order-book-chart.component.html',
  styleUrls: ['./order-book-chart.component.css']
})
export class OrderBookChartComponent implements OnInit {

  selectedOrderBookChart: OrderBookChart;
  orderBookCharts: OrderBookChart[];
  currentChart: OrderBookChartData;

  options = {
    responsive: true,
    scales: {
      yAxes: [{
        gridLines : {
          display : false
        },
        ticks: {
          callback: function(dataLabel, index) {
            return index % 7 === 0 ? dataLabel : '';
          }
        }
      }],
      xAxes: [{
        ticks: {
          min: -4,
          max: 4,
          stepSize: 0.5
        }
      }]
    }
  };

  constructor(private orderBookService: OrderBookService) { }

  getOrderBooks(): void {
    this.orderBookService.getOrderBooks()
      .subscribe(orderbooks => {
        this.orderBookCharts = orderbooks;
      });
  }

  ngOnInit() {
    this.getOrderBooks();
  }

  onSelect(orderBookChart: OrderBookChart): void {
    this.selectedOrderBookChart = orderBookChart;
    this.initChartData();
    console.log(this.selectedOrderBookChart);
  }

  private initChartData(): void {
    const book: OrderBook = this.selectedOrderBookChart.orderBook;
    const labels: string[] = [];

    const marketPriceIndex: number = this.getMarketPriceIndex();

    const neededBuckets: OrderBookBucket[] = book.buckets.slice(marketPriceIndex - 25, marketPriceIndex + 26);

    for (const bucket of neededBuckets) {
      labels.push(bucket.price);
    }

    console.log(neededBuckets);

    const datasets: BarDataset = new BarDataset(book.time, neededBuckets.map(x => x.longCountPercent - x.shortCountPercent));
    this.currentChart = new OrderBookChartData(labels, datasets);
  }

  private getMarketPriceIndex() {
    const book: OrderBook = this.selectedOrderBookChart.orderBook;

    for (let i = 0; i < book.buckets.length; i++) {
      if (book.buckets[i].price < book.price) {
        continue;
      }

      return i;
    }
  }

}
