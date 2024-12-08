import { Component,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent {
  @Input('listId')//parent vers fils
  listId = []
  @Output() close: EventEmitter<Boolean> = new EventEmitter();//fils vers parent
  closeAction() {
    this.close.emit(true)
  }
}
