import { createReducer, on } from "@ngrx/store";
import { User } from "src/models/User";
import { addUser, addUserSuccess, deleteUser, loadUsers, loadUsersFailure, loadUsersSuccess } from "./actions";


export interface UserState{
    users : User[],
    status : string,
    add : string
}

export const initialState : UserState = {
    users : [],
    status : 'initial',
    add : "initial"
}

export const userReducer = createReducer(
  // Supply the initial state
  initialState,
  // Add the new todo to the todos array
  on(addUser, (state, { user }) => ({ ...state, status: 'add loading' })),

  on(addUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users,user],
    add : 'add state'
  })),

  // Remove the todo from the todos array
  on(deleteUser, (state, { id }) => ({
    ...state,
    users: state.users.filter((data) => data.id !== id),
  })),

  // Trigger loading the Users
  on(loadUsers, (state) => ({ ...state, status: 'loading' })),

// Handle successfully loaded todos
    on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
    status: 'success',
  })),
  // Handle todos load failure
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    status: 'error',
  }))
);