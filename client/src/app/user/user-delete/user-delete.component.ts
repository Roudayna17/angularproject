import { Component,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent {
  @Input('listId')//parent vers fils
  listId = []
  @Output() close: EventEmitter<Boolean> = new EventEmitter();//fils vers parent
  closeAction() {
    this.close.emit(true)
  }
}
