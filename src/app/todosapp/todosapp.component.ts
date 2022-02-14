import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/models/Tasks';
import { TaskServiceService } from '../task-service.service';
@Component({
  selector: 'app-todosapp',
  templateUrl: './todosapp.component.html',
  styleUrls: ['./todosapp.component.css']
})
export class TodosappComponent implements OnInit {
  alert = false;
  task = '';
  tasks!: Tasks[];
  
  constructor(private taskService : TaskServiceService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    
  }
  addTask(){
    if(this.task !== ''){
    this.alert = false;
    this.taskService.addTask(this.task,false);
    this.task ="";
    }else{
      this.alert = true
    }
  }

}
