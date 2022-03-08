import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.css']
})
export class AgentDetailsComponent implements OnInit {

  agentId : string = "";

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.agentId = params['id'];
      }
    );
  }

}
