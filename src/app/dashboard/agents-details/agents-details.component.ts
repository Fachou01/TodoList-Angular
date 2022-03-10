import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { User } from 'src/models/User';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-agents-details',
  templateUrl: './agents-details.component.html',
  styleUrls: ['./agents-details.component.css']
})
export class AgentsDetailsComponent implements OnInit {

  initialId!: number;
  id!: number;
  password : string = "" ;
  show: boolean = false;
  role : string = "Choose user role" ;

  agent!: User; 
  closeResult: string | undefined;
  
  agents: User[] = [];
  stateAdd: boolean = false;
  urlStateEdit!: string;
  urlStateDelete!: string;

  userConnected!: any;
  addPermission!: boolean;

  //Datatables add
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private dashboardService : DashboardService,
    private modalService: NgbModal,
    private router : Router) { }

  ngOnInit(): void {

    this.dashboardService.getConnectedUser().subscribe({
     next: (agent : any)=> {
       this.userConnected = agent;
        if(agent.addPermission == "true")
          this.addPermission = true;
          else {
            this.addPermission = false ;
          }
       //console.log((agents));
       return(this.userConnected);
      },
     error:err => {
       //console.log(err);
       return(this.userConnected);
      }
   });

    this.getEditState();
    this.getDeleteState();
   
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 15, 25],
      processing: true
    };
    this.dashboardService.getAgents().subscribe({
     next: (agents : User[])=> {
       this.agents = agents;
       setTimeout(() => {
         this.dtTrigger.next("");
       });
       //console.log((agents));
       return(this.agents);
      },
     error:err => {
       //console.log(err);
       setTimeout(() => {
         this.dtTrigger.next("");
       });
       return(this.agents);
      }
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

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(result ==='add'){
      this.addUser();
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  addUser(){
    this.dashboardService.addUser(this.id,this.password,this.role).subscribe({
     next: (agent : User)=> {
       this.agents.push(agent);
       this.id = this.initialId;
       this.password = "";
       this.role = "Choose user role";
       this.stateAdd = true;
       setTimeout(()=>{
         this.stateAdd = false;
       },2000)
       console.log((agent));
       return(this.agents);
      },
     error:err => {
       console.log(err);
       return(this.agents);
      }
   });
  }

  async getEditState() {
    this.urlStateEdit = window.history.state.edit;

    setTimeout(()=>{
      this.urlStateEdit = "";
    },2000)
  }

  async getDeleteState() {
    this.urlStateDelete = window.history.state.delete;
    setTimeout(()=>{
      this.urlStateDelete = "";
    },2000)
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  
}
