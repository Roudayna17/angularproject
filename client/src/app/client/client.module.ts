import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddClientComponent } from './client-add/client-add.component';



@NgModule({
  declarations: [
    ClientUpdateComponent,
    ClientDeleteComponent,
    ClientListComponent,
    AddClientComponent
  ],
  imports: [
    CommonModule,ClarityModule,FormsModule,ReactiveFormsModule,ClientRoutingModule
  ], exports: [AddClientComponent,ClientUpdateComponent]

})
export class ClientModule { }
