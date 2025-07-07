import { TaskService } from './../../taskservice';
import { Component, OnInit } from '@angular/core';
import { FetchTask } from '../../ifetchtask';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.html',
  styleUrl: './task.css',
  standalone: true,


})
export class Task implements OnInit {
  tasks: FetchTask[] = [];

  constructor(private taskService: TaskService) {}

  trackById(index: number, task: FetchTask): number {
  return task.id;
  }

  ngOnInit(): void {
    console.log('TaskListComponent initialized');
    this.taskService.getAllTasks().subscribe({
      next: (data) => {
        this.tasks = data;
        console.log('Fetched tasks:', data);
      },
      error: (err) => {
        console.error("Failed to fetch tasks", err);
      }
    })
  }
}
