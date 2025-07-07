import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchTask } from './ifetchtask';
import { Icreattask } from './icreattask';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/tasks'; // Match your Spring Boot port

  constructor(private http: HttpClient) {}

  createTask(task: Icreattask) {
    return this.http.post(this.apiUrl, task);
  }
  getAllTasks() {
    return this.http.get<FetchTask[]>(this.apiUrl);
  }
}
