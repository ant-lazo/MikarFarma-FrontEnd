import { Component, OnInit } from '@angular/core';
//FromBuilder para el reactivo
import { FormBuilder, Validator, Validators } from '@angular/forms';
//importar la clase para el helpers
import { functions } from 'src/app/helpers/function';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public f = this.form.group({
    username:['', Validators.required],
    password:['', Validators.required]
  })

  formSubmitted = false;

  constructor(private form: FormBuilder) { }

  ngOnInit(): void {
  }

  login(){

    this.formSubmitted = true;

    if(this.f.invalid){
      return;
    }

    console.log("username", this.f.controls.username.value);
    console.log("password", this.f.controls.password.value);
  }

  invalidField(field:string){
    
    return functions.invalidField(field, this.f, this.formSubmitted);
    
  }

}
