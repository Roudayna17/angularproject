import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './client-add/client-add.component';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { ClientListComponent } from './client-list/client-list.component';

const routes: Routes = [
  { path: 'client-add', component: AddClientComponent },
  { path: 'client-update', component: ClientUpdateComponent },
    { path: '', component: ClientListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
