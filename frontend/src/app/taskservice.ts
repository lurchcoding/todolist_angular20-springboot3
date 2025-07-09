import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchTask } from './ifetchtask';
import { Icreattask } from './icreattask';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) {}

  createTask(task: Icreattask) {
    return this.http.post(this.apiUrl, task);
  }
  getAllTasks() {
    return this.http.get<FetchTask[]>(this.apiUrl);
  }
  getTask(id: number) {
    return this.http.get<FetchTask>(`${this.apiUrl}/${id}`);
  }
  deleteTask(id: number) {
    return this.http.delete<FetchTask>(`${this.apiUrl}/${id}`);
  }
  updateTask(task: FetchTask, id: number) {
    return this.http.put<FetchTask>(`${this.apiUrl}/${id}`, task);
  }
}
