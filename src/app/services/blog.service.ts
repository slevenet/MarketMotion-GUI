import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Note} from '../model/Note';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private restUrl = 'http://localhost:8080/blog/notes';

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.restUrl)
      .pipe(
        catchError(this.handleError('getNote', []))
      );
  }

  getNote(id: number): Observable<Note> {
    const url = `${this.restUrl}/${id}`;
    return this.http.get<Note>(url)
      .pipe(
        catchError(this.handleError<Note>(`getNote id=${id}`))
      );
  }

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
