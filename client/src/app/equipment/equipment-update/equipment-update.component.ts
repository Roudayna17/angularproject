import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-equipment-update',
  templateUrl: './equipment-update.component.html',
  styleUrls: ['./equipment-update.component.css']
})
export class EquipmentUpdateComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialisation du formulaire
    this.form = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-ZÀ-ÿ ]+$'), // Valide uniquement les lettres (y compris les accents)
          Validators.minLength(2)
        ]
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-ZÀ-ÿ ]+$'),
          Validators.minLength(2)
        ]
      ],
      options: [''], // Valeur par défaut pour le menu déroulant
      include: [false] // Valeur par défaut pour la case à cocher
    });
  }

  ngOnInit(): void {
    // Actions au moment de l'initialisation si nécessaire
  }

  submit(): void {
    if (this.form.valid) {
      console.log('Formulaire soumis avec succès :', this.form.value);
    } else {
      console.log('Le formulaire est invalide.');
    }
  }
}
