import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class AddClientComponent {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: this.formBuilder.group({// group1
        firstName: ['Prenom', [Validators.pattern(/^[A-Za-zÀ-ÿ]+$/),Validators.required,Validators.minLength(2)]],
        lastName: ['Nom',[Validators.pattern(/^[A-Za-zÀ-ÿ]+$/),Validators.required,Validators.minLength(2)]],
        user: ['Nom_utilisateur',[Validators.pattern(/^[A-Za-zÀ-ÿ]+$/),Validators.required,Validators.minLength(2)]],
      }),
      contact: this.formBuilder.group({//group2
        email: ['',[Validators.required,Validators.email]],
        phone: ['', Validators.pattern(/^(?:\+216|0)?[2579]\d{7}$/)],
       Fax: ['', Validators.pattern(/^(?:\+216|0)?7]\d{7}$/)],
      }),
    Adress: this.formBuilder.group({
      adress: [''],
      ville: [''],
      codepostal: [''],
      street:[''],
      }),
    
    submit: this.formBuilder.group({

     }),
  });
  }


  submit() {
    console.log('reactive form submit', this.form?.value.name.name);
  }
}
