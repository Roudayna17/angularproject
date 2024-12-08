import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  show: boolean=false;
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
users: any=[
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "role": "Admin",
    "email": "john.doe@example.com",
    "createAT": "2024-11-16T10:30:00Z"
  },
  {
    "id": 2,
    "firstName": "Jane",
    "lastName": "Smith",
    "role": "User",
    "email": "jane.smith@example.com",
    "createAT": "2024-11-15T14:15:00Z"
  },
  {
    "id": 3,
    "firstName": "Alice",
    "lastName": "Johnson",
    "role": "Manager",
    "email": "alice.johnson@example.com",
    "createAT": "2024-11-14T08:45:00Z"
  },
  {
    "id": 4,
    "firstName": "Bob",
    "lastName": "Brown",
    "role": "Guest",
    "email": "bob.brown@example.com",
    "createAT": "2024-11-13T16:00:00Z"
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
