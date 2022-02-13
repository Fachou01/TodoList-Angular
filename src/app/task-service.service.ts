import { Injectable } from '@angular/core';
import { Tasks } from '../models/Tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  task!: Tasks;
  tasks: Tasks[] =[
    new Tasks('initial task',false),new Tasks('second task',false)]; 
  
  constructor() { }

  getTasks(){
    //return(this.tasks);
    return(this.tasks);
  }

  addTask(content : string , completed : boolean){
    this.task = new Tasks(content,completed)
    this.tasks.push(this.task);
  }

  removeTask(taskDeleted:Tasks){
   let index = this.tasks.findIndex(e=>e.content === taskDeleted.content);
    if(index!==-1){
      this.tasks.splice(index,1)
    }
    
    /*this.tasks = this.tasks.filter((item) => item.content!==taskDeleted.content);
    console.log(this.tasks);*/
  }
  
  completedTask(tasks:Tasks){

  }
  
  
}
