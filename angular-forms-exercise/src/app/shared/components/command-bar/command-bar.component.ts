import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrl: './command-bar.component.scss'
})
export class CommandBarComponent {
 @Output() action = new EventEmitter<string>();

 addAction() {
  this.action.emit('Ad')
 }

 deleteAll() {
  this.action.emit('deleteAll');
}
}
