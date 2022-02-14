import { Component, Input, OnInit } from '@angular/core';
//import { MatDialog } from '@angular/material/dialog';
import { Tasks } from 'src/models/Tasks';
//import { PopupRemoveComponent } from '../popup-remove/popup-remove.component';
import { TaskServiceService } from '../task-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  task!: Tasks;
  check = false;
  closeResult = '';
  constructor(private taskService :TaskServiceService,private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  deleteTask(){
    //this.taskService.removeTask(this.task);
    //this.dialogPop.open(PopupRemoveComponent);

  }
  checkTask(){
    this.check = !this.check;
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(result ==='confirm'){
      this.taskService.removeTask(this.task);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string{
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
