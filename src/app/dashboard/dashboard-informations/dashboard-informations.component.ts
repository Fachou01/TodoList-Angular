import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { selectAllUsers } from 'src/app/store/selectors';
import { User } from 'src/models/User';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-informations',
  templateUrl: './dashboard-informations.component.html',
  styleUrls: ['./dashboard-informations.component.css']
})
export class DashboardInformationsComponent implements OnInit {

  agents !: Observable<any>
  agentsLength !: number

  constructor(private dashboardService : DashboardService, private store :Store<AppState>) { }

  ngOnInit(): void {

    
    this.agents = this.store.select(selectAllUsers);
    this.agents.subscribe((data)=>{
      //console.log(data)
      this.agentsLength = data.length
    })
    /*this.dashboardService.getAgents().subscribe({
     next: (agents : User[])=> {
       this.agents = agents;
       //console.log((agents));
       return(this.agents);
      },
     error:err => {
       //console.log(err);
       return(this.agents);
      }
   });*/
  }

}
