import { Component } from '@angular/core';

@Component({
  selector: 'app-equipment-delete',
  templateUrl: './equipment-delete.component.html',
  styleUrls: ['./equipment-delete.component.css']
})
export class EquipmentDeleteComponent {
  isModalOpen: boolean = false; // Contrôle l'ouverture du modal
  equipmentName: string = ''; // Nom de l'équipement à supprimer
  equipmentId: number | null = null; // ID de l'équipement à supprimer

  // Ouvre le modal avec le nom et l'ID de l'équipement
  openModal(equipmentId: number, equipmentName: string): void {
    this.equipmentId = equipmentId;
    this.equipmentName = equipmentName;
    this.isModalOpen = true;
  }

  // Ferme le modal sans effectuer de suppression
  closeAction(): void {
    this.isModalOpen = false;
    this.equipmentName = '';
    this.equipmentId = null;
  }

  // Effectue la suppression de l'équipement
  confirmDelete(): void {
    if (this.equipmentId !== null) {
      console.log(`L'équipement avec ID ${this.equipmentId} a été supprimé : ${this.equipmentName}`);
      // Ici, vous pouvez appeler un service pour supprimer l'équipement dans la base de données

      // Après la suppression, fermez le modal
      this.closeAction();
    }
  }
}
