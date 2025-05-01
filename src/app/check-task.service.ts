import { Injectable } from '@angular/core';
import {AppComponent} from './app.component';
import { InputStrService } from './input-str.service';
@Injectable({
  providedIn: 'root'
})
export class CheckTaskService {

  constructor(public app:AppComponent,public inputStr: InputStrService) { }

  checkTask(){
    if (this.app.inputValue.length>0) {
      this.inputStr.addTask(this.app.inputValue());
      this.app.inputValue.set(''); // Очищаем через сигнал
    }
  }
}
