import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentDetailAddComponent } from './equipment-detail-add/equipment-detail-add.component';
import { EquipmentDetailDeleteComponent } from './equipment-detail-delete/equipment-detail-delete.component';

const routes: Routes = [{
  path:'ajout-equipement-deatil',component:EquipmentDetailAddComponent
},
  {
  path:'delete-equipement-deatail',component:EquipmentDetailDeleteComponent
  },
  {
  path:'list-equipement-deatil',component:EquipmentDetailAddComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailEquipmentRoutingModule { }
