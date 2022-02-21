import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url : string = 'http://localhost:3000/user';

  constructor(private http : HttpClient) { }

  loginUser(crediantials :any) : Observable<any>{
    //this.task = new Tasks(content);
    return(this.http.post<any>(`${this.url}/login`,crediantials,{
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }));
    
  }
}
