import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlticciService {

  constructor(private http: HttpClient) { }

  public getAlticciSequenceValue(valor: number): Observable<number>{
    return this.http.get<number>('http://localhost:8080/alticci/' + valor);
  }
}