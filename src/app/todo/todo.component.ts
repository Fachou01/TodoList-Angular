import { Component, Input, OnInit } from '@angular/core';
import { Tasks } from 'src/models/Tasks';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  task!: Tasks;
  check = false;
  constructor(private taskService :TaskServiceService) { }

  ngOnInit(): void {
  }

  deleteTask(){
    this.taskService.removeTask(this.task);

  }
  checkTask(){
    this.check = !this.check;
  }

}
