import {createAction, props } from '@ngrx/store'
import { User } from 'src/models/User';

// Section 2
export const addUser = createAction(
    '[User] add User',
    props<{user : User}>()
)

export const addUserSuccess = createAction(
    '[User] add User Sucesss',
    props<{user : User}>()
)

export const deleteUser = createAction(
    '[User] delete User',
    props<{id : number}>()
)



export const loadUsers = createAction('[Todo Page] Load Todos');

export const loadUsersSuccess = createAction(
  '[Todo API] Users Load Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Todo API] Users Load Failure',
  props<{ error: string }>()
);