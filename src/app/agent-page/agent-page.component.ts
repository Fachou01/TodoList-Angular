import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agent-page',
  templateUrl: './agent-page.component.html',
  styleUrls: ['./agent-page.component.css']
})
export class AgentPageComponent implements OnInit {


  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  logoutAgent(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigateByUrl("/agent");
  }

 

}
