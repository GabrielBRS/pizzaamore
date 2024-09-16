import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subscribe } from './subscribe';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

apiURL: string = "http://localhost:8080";

constructor(private http: HttpClient) {

}

subscribeEmail(subscribe?:Subscribe): Observable<Object> {
  return this.http.post<Object>(`${this.apiURL}/subscribe/email`, subscribe, {observe:'response'})
}

subscribeGetAllEmail(): Observable<Subscribe[]> {
  return this.http.post<Subscribe[]>(`${this.apiURL}/subscribe/email`, {observe:'response'})
}

}
