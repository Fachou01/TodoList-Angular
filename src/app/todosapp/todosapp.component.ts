import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private taskService : TaskServiceService,private router : Router) { }

  ngOnInit(): void {
   this.taskService.getTasks().subscribe({
     next: (tasks : Tasks[])=> {
       this.tasks = tasks;
       //console.log(this.tasks);
       console.log((tasks));
       return(this.tasks);
      },
     error:err => {
       console.log(err);
       return(this.tasks);
      }
   });
  }
  addTask(){
    if(this.task !== ''){
    this.alert = false;
    this.taskService.addTask(this.task,false).subscribe({
      next : (task : Tasks) => {console.log(task);
        this.tasks.push(task);
        //this.ngOnInit();
      }
    });
    this.task ="";
    }else{
      this.alert = true
    }
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigateByUrl("/admin");
  }

}
