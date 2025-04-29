import { Component } from '@angular/core';
import { InputStrService } from './input-str.service';
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
  constructor(public inputStr:InputStrService) {
  }
}
