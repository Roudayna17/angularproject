import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  form:FormGroup
  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      email:['email user',[Validators.required,Validators.email]],
      userName:['user name',[Validators.required,Validators.minLength(8)]],
      password:['',Validators.required],
      passwordComfirmer:['']

    
    }),{validator:this.passwordMatchValidator}
    

  }

  passwordMatchValidator(group: FormGroup) {
    
    const password = group.get('password')?.value;
    const confirmPassword = group.get('passwordComfirmer')?.value;
    return password === confirmPassword ? null : { mismatch: true };
   
  }
  submit(){
    
  }
  
}
