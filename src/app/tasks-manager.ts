import { Task } from './task';
import { Injectable,signal, computed } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TasksManager {
  tasks = signal<Task[]>([]);

  addTask(newTask: string): void {
    if (newTask.length > 0){
      this.tasks.update(currentTasks => [
        ...currentTasks,
        {name: newTask, completed: false, id: uuid()}
      ]);
    }
  }

  toggleTaskCompletion(taskId: string): void {
    this.tasks.update(tasks => tasks.map(task =>
      task.id === taskId ? {...task, completed: !task.completed} : task
    ));
  }

  deleteTask(taskId: string): void{
    this.tasks.update(currentTasks =>
      currentTasks.filter(task => task.id !== taskId)
    );
  }

  countFalseTasks() {
    return computed(() => this.tasks().filter(task => !task.completed).length);
  }
}
