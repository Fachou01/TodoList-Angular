import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AgentPageComponent } from './agent-page/agent-page.component';
import { AgentComponent } from './agent/agent.component';
import { LogAgentGuard } from './guards/logAgent.guard';
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';
import { TodosappComponent } from './todosapp/todosapp.component';

const routes: Routes = [
  {path : "" , component : HomeComponent },
  {path : "todos" , component : TodosappComponent,canActivate:[LoginGuard,LogAgentGuard]},
  {path : "admin" , component : AdminComponent},
  {path : "agent" , component : AgentComponent},
  {path : "agentPage" , component : AgentPageComponent,canActivate:[LoginGuard]},
  {path: '**', redirectTo : "/"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
