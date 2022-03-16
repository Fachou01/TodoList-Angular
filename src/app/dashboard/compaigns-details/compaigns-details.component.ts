import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectAllUsers } from 'src/app/store/selectors';

@Component({
  selector: 'app-compaigns-details',
  templateUrl: './compaigns-details.component.html',
  styleUrls: ['./compaigns-details.component.css']
})
export class CompaignsDetailsComponent implements OnInit {

  users = this.store.select(selectAllUsers)

  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
    console.log(this.users);
    
  }

}
