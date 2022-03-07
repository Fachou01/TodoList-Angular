import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/models/User';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-agents-details',
  templateUrl: './agents-details.component.html',
  styleUrls: ['./agents-details.component.css']
})
export class AgentsDetailsComponent implements OnInit {
  id!: number;
  password : string = "" ;
  show: boolean = false;
  role : string = "Choose user role" ;

  editId!: number;
  editPassword!: string ;
  editRole!: string ; 
  
  agents: User[] = [];
  agent!: User; 
  closeResult: string | undefined;

  constructor(private dashboardService : DashboardService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.dashboardService.getAgents().subscribe({
     next: (agents : User[])=> {
       this.agents = agents;
       console.log((agents));
       return(this.agents);
      },
     error:err => {
       console.log(err);
       return(this.agents);
      }
   });
  }
  getUserFromTemplate(agent : User){
    this.agent = agent;
  }
  getUserToEdit(agent : User){
    this.editId = agent.id;
    this.editPassword = agent.password;
    this.editRole = agent.role;
  }

   open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(result ==='add'){
      this.addUser();
      }else if(result ==="edit"){
        this.editUser();
      }else if(result ==="delete"){
        this.deleteUser(this.agent);
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



  addUser(){
    this.dashboardService.addUser(this.id,this.password,this.role).subscribe({
     next: (agent : User)=> {
       this.agents.push(agent)
       console.log((agent));
       return(this.agents);
      },
     error:err => {
       console.log(err);
       return(this.agents);
      }
   });
  }

  deleteUser(agent : User){
    console.log(this.agent);
    this.dashboardService.deleteUser(agent.id).subscribe({
        next : ()=> {
        let index = this.agents.findIndex(user=> user.id === agent.id);
        if(index>=0)
            this.agents.splice(index,1);
        },
        error : ()=> console.log("error")
      })
  }
  editUser(){
    //console.log(this.editId);
    const newAgent = {
      id : this.editId,
      password : this.editPassword,
      role : this.editRole
      
    }
    let index = this.agents.findIndex(user=> user.id === this.editId);
    this.agents[index].id = newAgent.id;
    this.agents[index].password  = newAgent.password;
    this.agents[index].role  = newAgent.role;
        this.dashboardService.editUser(newAgent).subscribe({
          next: (user)=> {
            console.log(user);
          },
          error : ()=> console.log("error")
        });
  }

}
