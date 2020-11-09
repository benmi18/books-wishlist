import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly config = {
    BASE_URL: 'https://www.googleapis.com/books/v1/volumes',
    API_KEY: 'key=AIzaSyABP0xLFrbMJiGUwjH8zhKVHxShG6BSf5w'
  };

  constructor(private http: HttpClient) { }

  public searchBooks(query: string) {
    return this.http.get(`${this.config.BASE_URL}?${this.config.API_KEY}&q=${query}&startIndex=0&maxResults=20`)
        .pipe(
            catchError((error) => {
              // TODO: handle error
              // this.store.dispatch(openErrorSnackBar({message: 'error message', duration: 3000}));
              return of(error);
            })
        );
  }
}
