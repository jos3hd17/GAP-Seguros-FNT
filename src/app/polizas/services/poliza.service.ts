import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poliza } from '../models/poliza.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PolizaService {

  url = `${environment.url}/policies`;
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(this.url, { headers, responseType: 'json' });
  }

}
