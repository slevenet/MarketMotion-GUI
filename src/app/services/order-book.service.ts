import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrderBookChart } from '../model/order-book-chart';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderBookService {

  private restUrl = 'http://localhost:8080/orderbook/charts';

  getOrderBooks(): Observable<OrderBookChart[]> {
    return this.http.get<OrderBookChart[]>(this.restUrl)
      .pipe(
        catchError(this.handleError('getOrderBook', []))
      );
  }

  getOrderBook(id: number): Observable<OrderBookChart> {
    const url = `${this.restUrl}/${id}`;
    return this.http.get<OrderBookChart>(url)
      .pipe(
        catchError(this.handleError<OrderBookChart>(`getOrderBook id=${id}`))
      );
  }

  constructor(private http: HttpClient) {}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
