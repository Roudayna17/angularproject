import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentAddComponent } from './equipment-add/equipment-add.component';
import { EquipmentUpdateComponent } from './equipment-update/equipment-update.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';

const routes: Routes = [{ path: "ajout-equipement", component: EquipmentAddComponent },
  { path: "update-equipement", component: EquipmentUpdateComponent },
  { path: "", component: EquipmentListComponent },
   {path:'equipement-detail',loadChildren:()=>import('./detail-equipment/detail-equipment.module').then(m=>m.DetailEquipmentModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }
