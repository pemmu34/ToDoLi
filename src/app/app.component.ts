import { Component } from '@angular/core';
import {InputStr} from './InputStr';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    FormsModule
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public inputStr:InputStr) {
  }
}
