import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  id="";
  password="";
  
  constructor(private adminService : AdminService,private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const crediantials = {
      id:this.id,
      password: this.password
    }
    this.adminService.loginUser(crediantials).subscribe({
     next: (token : any)=> {
       //test of role and token existence
       if(token.role==="agent"){
         //page erreur
        this.router.navigateByUrl('/');
       }else if(token.access_token){
        //set token to localstorage
       localStorage.setItem("token",token.access_token);
       localStorage.setItem("role",token.role);
       this.router.navigateByUrl("/todos");
       }
      },
     error:err => {
       console.log(err);
      }
   });
  }

}
