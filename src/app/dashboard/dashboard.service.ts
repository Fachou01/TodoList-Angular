import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url : string = 'http://localhost:3000/user';
  agents!: User[]; 
  user!: User ;

  constructor(private http : HttpClient ) { }

  getAgents() : Observable<User[]>{
    return(this.http.get<User[]>(`${this.url}/getall`))

  }

  getAgentById(id : number) : Observable<User>{
    return(this.http.get<User>(`${this.url}/getbyid/${id}`))

  }

  addUser(user : User) : Observable<any>{
    //this.user = new User(id,password,role);
    return(this.http.post<any>(`${this.url}/add`,user));

  }

  deleteUser(id : number){
    return(this.http.delete(`${this.url}/delete/${id}`));

  }
  /*editUser(agent : any){
    const newAgent = new User(agent.id,agent.password,agent.role);
    return(this.http.put(`${this.url}/update/${newAgent.id}`,newAgent));

  }*/
   getConnectedUser() : Observable<any>{
     return(this.http.get(`${this.url}/getconnecteduser`));
   }
}
