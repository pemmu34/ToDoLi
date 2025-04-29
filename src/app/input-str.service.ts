import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputStrService {
  inputValue: string = ''; // Переменная для хранения введённого слова
  BoolTasks: Todo[] = [];

  onEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter' && this.inputValue.length>0) {
      const newTask:Todo={
        name: this.inputValue,
        completed: false
      }
      this.BoolTasks.push(newTask)
      this.inputValue = ''; // Очищаем поле ввода
    }
  }
}

interface Todo {
  name:string;
  completed:boolean
}
