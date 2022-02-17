import { Injectable } from '@angular/core';
import { Tasks } from '../models/Tasks';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  url : string = 'http://localhost:3000/todos';
  task!: Tasks;
  tasks!: Tasks[]; 
  
  constructor(private http : HttpClient) { }

  getTasks() : Observable<Tasks[]>{
    return(this.http.get<Tasks[]>(`${this.url}/getall`))
   //return(this.tasks);
  }

  addTask(content : string , completed : boolean) : Observable<Tasks>{
    this.task = new Tasks(content);
    return(this.http.post<Tasks>(`${this.url}/add`,this.task,{
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }));
    
  }

  removeTask(taskId:number){
   /*let index = this.tasks.findIndex(task=> task.id === taskId);
        if(index>=0)
            this.tasks.splice(index,1)*/
    return(this.http.delete(`${this.url}/delete/${taskId}`));
  }
  
  editTask(taskId : number,task : any) : Observable<any>{
    return(this.http.put(`${this.url}/update/${taskId}`,task,{
       headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }));
  }
  
  completedTask(tasks:Tasks){

  }
  
  
}


