import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-equipment-add',
  templateUrl: './equipment-add.component.html',
  styleUrls: ['./equipment-add.component.css']
})
export class EquipmentAddComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
  
        title: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-zA-ZÀ-ÿ ]+$'), // Valide les caractères alphabétiques
            Validators.minLength(2)
          ]
        ],
        discription: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-zA-ZÀ-ÿ ]+$'),
            Validators.minLength(2)
          ]
        ],
   
      options: [], // Valeur par défaut pour le select
      include: [false] // Checkbox "include"
    });
  }

  ngOnInit(): void {

  }

  submit(): void {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
    } console.log('Form is invalid!');
    }
  }
