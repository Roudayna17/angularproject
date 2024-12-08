import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';



@NgModule({
  declarations: [
    AddUserComponent,
    UpdateComponent,
    UserListComponent,
    UserDeleteComponent,
  ],
  imports: [
    CommonModule,ClarityModule,FormsModule,ReactiveFormsModule,ReactiveFormsModule,UserRoutingModule
  ],
  exports:[
    AddUserComponent,UpdateComponent

  ]
})
export class UserModule { }
