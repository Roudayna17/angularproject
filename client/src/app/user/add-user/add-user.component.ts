import { Component } from '@angular/core';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: this.formBuilder.group({// group1
        firstName: ['Prenom', [Validators.pattern(/^[A-Za-zÀ-ÿ]+$/),Validators.required,Validators.minLength(2)]],
        lastName: ['Nom',[Validators.pattern(/^[A-Za-zÀ-ÿ]+$/),Validators.required,Validators.minLength(2)]],
        role:['',Validators.required]
      }),
      contact: this.formBuilder.group({//group2
        email: ['',[Validators.required,Validators.email]],
        phone: ['', Validators.pattern(/^(?:\+216|0)?[2579]\d{7}$/)],
      }),
      password: this.formBuilder.group({
        password: [],
        confirm: [],
      },{validator:this.passwordMatchValidator}),
    
    submit: this.formBuilder.group({

     }),
  });
  }
  passwordMatchValidator(group: FormGroup) {
    
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirm')?.value;
    return password === confirmPassword ? null : { mismatch: true };
   
  }

  submit() {
    console.log('reactive form submit', this.form?.value.name.name);
  }
}
