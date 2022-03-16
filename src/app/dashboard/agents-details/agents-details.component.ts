import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { addUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.state';
import { selectAllUsers } from 'src/app/store/selectors';
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
  
  agents!: Observable<any>;
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
    private router : Router,
    private store : Store<AppState>) { }

  ngOnInit(): void {

     this.agents = this.store.select(selectAllUsers);
    //console.log(this.agents)
     console.log("add mchét mel selector");

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
    /*this.dashboardService.getAgents().subscribe({
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
   });*/
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
    /*this.dashboardService.addUser(this.id,this.password,this.role).subscribe({
     next: (agent : User)=> {
       //this.agents.push(agent);
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
   });*/
   const userAdded = new User(this.id,this.password,this.role,"sqdqsd","true") ;

   this.store.dispatch(addUser({user:userAdded}));
   console.log("add mchét");

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
