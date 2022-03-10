import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TaskServiceService} from "../../task-service.service";
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private dashboardService :DashboardService, private router : Router) { }

  ngOnInit(): void {
  }

  logoutDash(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
   // this.router.navigateByUrl("/admin");
    this.router.navigateByUrl("/admin");
  }

}
