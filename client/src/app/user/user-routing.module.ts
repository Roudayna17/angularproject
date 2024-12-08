import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateComponent } from './update/update.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'update-user', component: UpdateComponent },
    { path: '', component: UserListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
