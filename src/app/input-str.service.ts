import { Injectable,signal } from '@angular/core';

interface Todo {
  name:string;
  completed:boolean
}

@Injectable({
  providedIn: 'root'
})
export class InputStrService {
  tasks = signal<Todo[]>([]);

  addTask(task:string): void {
    this.tasks.update(currentTasks => [
      ...currentTasks,
      {name: task, completed: false}
    ]);
  }

  checkTask(task: string): void {
    if (task.length > 0) {
      this.addTask(task);
    }
  }


}

