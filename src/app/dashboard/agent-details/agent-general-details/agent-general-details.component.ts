import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/models/User';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-agent-general-details',
  templateUrl: './agent-general-details.component.html',
  styleUrls: ['./agent-general-details.component.css']
})
export class AgentGeneralDetailsComponent implements OnInit {

  id!: number;
  password : string = "" ;
  role : string = "Choose user role" ;
  
  agent!: User; 
  closeResult: string | undefined;


  constructor(
    private dashboardService : DashboardService,
    private modalService: NgbModal,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.id = params['id'];  
      }
    );
    this.dashboardService.getAgentById(this.id).subscribe({
     next: (agent : User)=> {
       this.agent = agent;
       this.password = agent.password;
       this.role = agent.role;
       console.log((agent));
       return(this.agent);
      },
     error: err => {
       console.log(err);
       return(this.agent);
      }
   });
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(result ==='edit'){
        this.editUser();
      }else if(result ==="delete"){
        this.deleteUser(this.id);
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

  editUser(){
    const newAgent = {
      id : this.id,
      password : this.password,
      role : this.role
      
    }
        this.dashboardService.editUser(newAgent).subscribe({
          next: (user)=> {
            console.log(user);
            this.router.navigateByUrl('/dashboard/agents');
          },
          error : ()=> console.log("error")
        });
        
  }

   deleteUser(id : number){
    console.log(this.agent);
    this.dashboardService.deleteUser(id).subscribe({
        next : ()=> {
          this.router.navigateByUrl('/dashboard/agents');
        },
        error : ()=> console.log("error")
      })
  }

}
