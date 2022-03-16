import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser, loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.state';
import { selectAllUsers } from 'src/app/store/selectors';
import { User } from 'src/models/User';
import {TaskServiceService} from "../../task-service.service";
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  agents!: Observable<any>;


  constructor( private dashboardService :DashboardService, 
    private router : Router, 
    private store : Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    console.log("load users called");
    this.agents = this.store.select(selectAllUsers);
    /*this.agents.subscribe((data)=>{
      console.log("hethi loadUsers",data);
    })*/
    /*this.store.subscribe(()=>{
      console.log("data updated")
    })*/
    //console.log(this.agents)
  }

  logoutDash(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
   // this.router.navigateByUrl("/admin");
    this.router.navigateByUrl("/admin");
  }

}
