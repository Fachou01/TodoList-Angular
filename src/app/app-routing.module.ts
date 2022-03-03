import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AgentPageComponent } from './agent-page/agent-page.component';
import { AgentComponent } from './agent/agent.component';
import { AgentsDetailsComponent } from './dashboard/agents-details/agents-details.component';
import { CompaignsDetailsComponent } from './dashboard/compaigns-details/compaigns-details.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LogAgentGuard } from './guards/logAgent.guard';
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';
import { TodosappComponent } from './todosapp/todosapp.component';

const routes: Routes = [
  {path : "" , component : HomeComponent },
  {path : "dashboard" , component : DashboardComponent, canActivate:[LoginGuard,LogAgentGuard],
  children : [
    {path : "todos" , component : TodosappComponent},
    {path : "agents" , component : AgentsDetailsComponent},
    {path : "compaigns" , component : CompaignsDetailsComponent}
  ]},
  {path : "admin" , component : AdminComponent},
  {path : "agent" , component : AgentComponent},
  {path : "agentPage" , component : AgentPageComponent,canActivate:[LoginGuard]},
  {path : "error" , component : ErrorPageComponent},
  {path: '**',pathMatch :"full", component :ErrorPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
