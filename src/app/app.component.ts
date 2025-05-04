import { Component, signal, inject } from '@angular/core';
import { TasksManager } from './tasks-manager';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [FormsModule],
  styleUrl: './app.component.css',
})
export class AppComponent {
  public tasksManager: TasksManager = inject(TasksManager);

  inputValue = signal('');
  uncompletedTasksCount = this.tasksManager.countFalseTasks();
  TasksOutput:number = 1;

  onEnter() {
    this.tasksManager.addTask(this.inputValue());
    this.inputValue.set('');
  }
}
