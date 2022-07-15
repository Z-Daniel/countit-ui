import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private readonly SERVER_HOST = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  post<T>(path: string, body: T): Observable<T> {
    const url = this.addPathToHost(path);
    return this.http.post<T>(url, body);
  }

  put<T, B>(path: string, body: B): Observable<T> {
    const url = this.addPathToHost(path);
    return this.http.put<T>(url, body);
  }

  getWithoutParams<T>(path: string): Observable<T> {
    const url = this.addPathToHost(path);
    return this.http.get<T>(url);
  }

  private addPathToHost(path: string): string {
    return this.SERVER_HOST + path;
  }
}
