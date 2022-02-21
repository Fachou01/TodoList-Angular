import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../auth/auth.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  idAgent="";
  passwordAgent="";

  constructor(private adminService : AdminService,private router : Router) { }

  ngOnInit(): void {
  }

  onSubmitAgent(){
    const crediantials = {
      id:this.idAgent,
      password: this.passwordAgent
    }
    this.adminService.loginUser(crediantials).subscribe({
     next: (token : any)=> {
      console.log(token)
       //return(token);
       if(token.role==="admin"){
        this.router.navigateByUrl('/');
       }else if(token.access_token){
       localStorage.setItem("token",token.access_token);
       localStorage.setItem("role",token.role);
       this.router.navigateByUrl("/agentPage");
       }
      },
     error:err => {
       console.log(err);
      }
   });
  }

}
