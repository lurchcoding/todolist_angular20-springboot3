package com.floeng.todolist.repository;

import com.floeng.todolist.entity.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository <TaskEntity, Long> {
}
