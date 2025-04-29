import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputStr {
  inputValue: string = ''; // Переменная для хранения введённого слова
  BoolTasks: [boolean, string][] = [];
  tested:string='test';

  onEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter' && this.inputValue.length>0) {
      this.BoolTasks.push([true,this.inputValue])
      this.tested = this.inputValue;
      this.inputValue = ''; // Очищаем поле ввода
    }
  }
}
