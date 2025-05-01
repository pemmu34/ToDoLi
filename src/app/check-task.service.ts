import { Injectable } from '@angular/core';
import { InputStrService } from './input-str.service';
@Injectable({
  providedIn: 'root'
})
export class CheckTaskService {

  constructor(public inputStr: InputStrService) { }

  checkTask(task: string): void {
    if (task.length > 0) {
      this.inputStr.addTask(task);
    }
  }
}
