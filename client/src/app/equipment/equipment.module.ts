import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentRoutingModule } from './equipment-routing.module';
import { EquipmentAddComponent } from './equipment-add/equipment-add.component';
import { EquipmentUpdateComponent } from './equipment-update/equipment-update.component';
import { EquipmentDeleteComponent } from './equipment-delete/equipment-delete.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EquipmentAddComponent,
    EquipmentUpdateComponent,
    EquipmentDeleteComponent,
    EquipmentListComponent
  ],
  imports: [
    CommonModule,
    EquipmentRoutingModule,ClarityModule,FormsModule,ReactiveFormsModule
  ]
})
export class EquipmentModule { }
