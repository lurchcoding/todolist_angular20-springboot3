import { Routes } from '@angular/router';
import { Task } from './components/task/task';
import { Newtask } from './components/newtask/newtask';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
  {path: "", redirectTo: "tasks", pathMatch: "full"},
  {path: "tasks", component: Task},
  {path: "newtask", component: Newtask},
  {path: "**", component: Notfound}
];
