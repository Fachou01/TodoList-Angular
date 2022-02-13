import { Component, Input, OnInit } from '@angular/core';
import { Tasks } from 'src/models/Tasks';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  @Input()
  tasks!: Tasks[];
  constructor() { }

  ngOnInit(): void {
  }

}
