import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailEquipmentRoutingModule } from './detail-equipment-routing.module';
import { EquipmentDetailAddComponent } from './equipment-detail-add/equipment-detail-add.component';
import { EquipmentDetailUpdateComponent } from './equipment-detail-update/equipment-detail-update.component';
import { EquipmentDetailDeleteComponent } from './equipment-detail-delete/equipment-detail-delete.component';
import { EquipmentDetailListComponent } from './equipment-detail-list/equipment-detail-list.component';


@NgModule({
  declarations: [
    EquipmentDetailAddComponent,
    EquipmentDetailUpdateComponent,
    EquipmentDetailDeleteComponent,
    EquipmentDetailListComponent
  ],
  imports: [
    CommonModule,
    DetailEquipmentRoutingModule
  ]
})
export class DetailEquipmentModule { }
