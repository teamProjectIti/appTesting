import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Call } from '../Model/Call';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  private apiUrl = `${environment.apiUrl}`;


  constructor(private http: HttpClient) {}

  getProducts(): Observable<Call[]> {
    console.log(this.apiUrl);
    return this.http.get<Call[]>(this.apiUrl);
}

 
}

