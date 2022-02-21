import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { TodosappComponent } from './todosapp/todosapp.component';
import { PopupRemoveComponent } from './popup-remove/popup-remove.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AgentComponent } from './agent/agent.component';
import { HomeComponent } from './home/home.component';
import { AgentPageComponent } from './agent-page/agent-page.component'
import { TokenInterceptorService } from './token-interceptor.service';
import { LoginGuard } from './guards/login.guard';
import { LogAgentGuard } from './guards/logAgent.guard';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent,
    NavComponent,
    TodosappComponent,
    PopupRemoveComponent,
    AdminComponent,
    AgentComponent,
    HomeComponent,
    AgentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  },
  LoginGuard,
  LogAgentGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
