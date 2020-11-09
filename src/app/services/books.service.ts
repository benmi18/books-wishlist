import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly config = {
    BASE_URL: 'https://www.googleapis.com/books/v1/volumes',
    API_KEY: 'key=AIzaSyABP0xLFrbMJiGUwjH8zhKVHxShG6BSf5w',
      START_INDEX: 0,
      MAX_RESULTS: 20
  };

  constructor(private http: HttpClient) { }

  public searchBooks(query: string) {
    return this.http.get(`${this.config.BASE_URL}?${this.config.API_KEY}&q=${query}&startIndex=${this.config.START_INDEX}&maxResults=${this.config.MAX_RESULTS}`);
  }
}
