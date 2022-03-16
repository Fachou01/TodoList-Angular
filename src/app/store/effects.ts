import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
//import { selectAllUsers } from './todo.selectors';
import { DashboardService } from '../dashboard/dashboard.service';
import { addUser, addUserSuccess, loadUsers, loadUsersFailure, loadUsersSuccess } from './actions';
import { AppState } from './app.state';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private dashboardService: DashboardService
  ) {}

  // Run this code when a loadUsers action is dispatched
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        // Call the getUsers method, convert it to an observable
        from(this.dashboardService.getAgents()).pipe(
          // Take the returned value and return a new success action containing the Users
          map((users) => loadUsersSuccess({ users: users })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(loadUsersFailure({ error })))
        )
      )
    )
  )

  addUser$ =createEffect(()=>
  this.actions$.pipe(
    ofType(addUser),
    switchMap((payload)=>
    from(this.dashboardService.addUser(payload.user)).pipe(
          // Take the returned value and return a new success action containing the Users
          map((user) => addUserSuccess({ user: user  }))
    )

  )
  )
  ) 

  // Run this code when the addTodo or removeTodo action is dispatched
  /*saveUsers$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addUser, removeUser),
        withLatestFrom(this.store.select(selectAllUsers)),
        switchMap(([action, Users]) => from(this.Userservice.saveUsers(Users)))
      ),
    // Most effects dispatch another action, but this one is just a "fire and forget" effect
    { dispatch: false }
  );*/
}