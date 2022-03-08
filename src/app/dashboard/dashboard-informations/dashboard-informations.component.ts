import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-informations',
  templateUrl: './dashboard-informations.component.html',
  styleUrls: ['./dashboard-informations.component.css']
})
export class DashboardInformationsComponent implements OnInit {

  constructor(private dashboardService : DashboardService) { }

  agents : User [] = []
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

}
