import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Photo } from '../models/photo'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicFeedService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  feedUrl = 'http://localhost:3000/photos';

  constructor(private http: HttpClient) { }

  getFeed(): Observable<Array<Photo>> {
    const result = this.http.get<Array<Photo>>(this.feedUrl, this.httpOptions);
    return result;
  }

  searchPhotos(term: string): Observable<Array<Photo>> {
    if (!term.trim()) {
      // if not search term, return empty term array.
      return this.getFeed();
    }
    const result = this.http.get<Array<Photo>>(`${this.feedUrl}/?search=${term}`);
    return result;
  }
}
