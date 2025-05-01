import { Component, signal   } from '@angular/core';
import { InputStrService } from './input-str.service';
import {FormsModule} from '@angular/forms';
import {CheckTaskService} from './check-task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    FormsModule
  ],
  styleUrl: './app.component.css',
  providers: [CheckTaskService]
})
export class AppComponent {
  inputValue = signal('');
  constructor(public inputStr:InputStrService,public checkTask:CheckTaskService) {}

  onEnter() {
    this.checkTask.checkTask(this.inputValue());
    this.inputValue.set('');
  }
}
