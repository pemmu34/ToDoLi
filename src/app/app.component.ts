import { Component, signal   } from '@angular/core';
import { InputStrService } from './input-str.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    FormsModule
  ],
  styleUrl: './app.component.css',
})
export class AppComponent {
  inputValue = signal('');
  constructor(public inputStr:InputStrService) {}

  onEnter() {
    this.inputStr.checkTask(this.inputValue());
    this.inputValue.set('');
  }
}
