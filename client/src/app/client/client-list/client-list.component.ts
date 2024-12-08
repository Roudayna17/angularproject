import { Component } from '@angular/core';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  show: boolean = false;
cliente: any;
  
onEdit() {
throw new Error('Method not implemented.');
}

onAdd() {
throw new Error('Method not implemented.');
}
onExportSelected() {
throw new Error('Method not implemented.');
}
onExportAll() {
throw new Error('Method not implemented.');
}
client: any=[
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "createAT": "2024-11-16T10:30:00Z",
    "rue": "paris",
    "phone": "95750168",
    "codepostal": "4111",
    "Fax": "95750168",
    "ville":"medenine"
  },
  {
    "id": 2,
     "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "createAT": "2024-11-16T10:30:00Z",
    "rue": "paris",
    "phone": "95750168",
    "codepostal": "4111",
    "Fax": "95750168",
    "ville":"medenine"
  },
  {
    "id": 3,
    "firstName": "Alice",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "createAT": "2024-11-16T10:30:00Z",
    "rue": "paris",
    "phone": "95750168",
    "codepostal": "4111",
    "Fax": "95750168",
    "ville":"medenine"
  },
  {
    "id": 4,
    "firstName": "Bob",
   "lastName": "Doe",
    "email": "john.doe@example.com",
    "createAT": "2024-11-16T10:30:00Z",
    "rue": "paris",
    "phone": "95750168",
    "codepostal": "4111",
    "Fax": "95750168",
    "ville":"medenine"
  }
]

  selected: any = []
  deleteAction() {
    this.show=true
  }
  actionClose() {
    this.show=false
  }
}
