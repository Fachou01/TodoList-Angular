import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AgentPageComponent } from './agent-page/agent-page.component';
import { AgentComponent } from './agent/agent.component';
import { HomeComponent } from './home/home.component';
import { TodosappComponent } from './todosapp/todosapp.component';

const routes: Routes = [
  {path : "" , component : HomeComponent },
  {path : "todos" , component : TodosappComponent },
  {path : "admin" , component : AdminComponent},
  {path : "agent" , component : AgentComponent},
  {path : "agentPage" , component : AgentPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
