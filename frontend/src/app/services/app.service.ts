import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.baseUrl + "api/";
  }

  calculate(n: number) {
    return this.http.get<any>(this.url + n);
  }
}
