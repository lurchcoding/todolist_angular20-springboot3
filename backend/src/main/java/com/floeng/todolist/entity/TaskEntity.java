package com.floeng.todolist.entity;

import jakarta.persistence.*;

@Entity
public class TaskEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "task_description")
    private String taskDescription;
    @Column(name = "task_name")
    private String taskName;

    public TaskEntity(Long id, String taskDescription, String taskName) {
        this.id = id;
        this.taskDescription = taskDescription;
        this.taskName = taskName;
    }

    public TaskEntity() {

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTaskDescription() {
        return taskDescription;
    }

    public void setTaskDescription(String taskDescription) {
        this.taskDescription = taskDescription;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }
}

