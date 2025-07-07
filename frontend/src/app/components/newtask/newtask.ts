import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../taskservice';
import { Icreattask } from '../../icreattask';



@Component({
  selector: 'app-newtask',
  imports: [FormsModule],
  templateUrl: './newtask.html',
  styleUrl: './newtask.css',
  standalone: true
})
export class Newtask {
  task: Icreattask  = {
    taskName: "",
    taskDescription: ""
  }


  constructor(private taskkService: TaskService) {}

  onSubmit() {
    this.taskkService.createTask(this.task).subscribe({
      next: (res) => {
        console.log("Task created!", res);
        // Optionally reset the form
        this.task = {taskName: "", taskDescription: ""};
      },
      error: (err) => {
        console.error("Error creating taks", err);
      }
    });

  }
}

