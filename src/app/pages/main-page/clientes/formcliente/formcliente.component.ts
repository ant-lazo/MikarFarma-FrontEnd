import { Component, OnInit } from '@angular/core';
//Reactivo
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
//importar la clase para el helpers
import { functions } from 'src/app/helpers/function';
//importar ClienteService
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-formcliente',
  templateUrl: './formcliente.component.html',
  styleUrls: ['./formcliente.component.css']
})
export class FormclienteComponent implements OnInit {

  //grupo de controles para el reactivo
  public f = this.form.group({
    nombre:['', [Validators.required,Validators.pattern('[a-zA-ZáéíóúñÑ ]{2,50}')]],
    apellido:['', [Validators.required,Validators.pattern('[a-zA-ZáéíóúñÑ ]{2,50}')]],
    //email:['', Validators.email],
    email:['', { validators: [Validators.email], asyncValidators: [this.isRepeatEmail()]
      }],
    //email:['', {validator: [], asyncValidators: [this.isRepeatEmail()]}], 
    telefono:['',Validators.pattern('[0-9 ]{6,13}')]
  })

  //validacion personalizada
  get nombre(){return this.f.controls.nombre}
  get apellido(){return this.f.controls.apellido}
  get email(){return this.f.controls.email}
  get telefono(){return this.f.controls.telefono}

  //Para validar el envio del formulario
  formSubmitted = false;

  constructor(private form: FormBuilder,private clienteService: ClienteService) { }

  ngOnInit(): void {
    //console.log("hola",this.clienteService.getFilterEmail("aaa@gmail.com"))
  }

  //guardar cliente

  guardarCliente(){
    //validamos que el fomulario haya sido enviado
    this.formSubmitted = true;
    //validamos que el formulario este correcto
    if(this.f.invalid){
      return;
    }
  }

  //validamos los campos del formulario login
  invalidField(field:string){
    
    return functions.invalidField(field, this.f, this.formSubmitted);
    
  }

  //validar que el email no se repeta
  isRepeatEmail(){
    return(control: AbstractControl ) =>{
      const email = control.value;
      return new Promise((resolve)=>{
        this.clienteService.getFilterEmail(email).subscribe(
          resp=>{
            console.log("objeto Cliente:",resp)
            console.log("objeto.keys_delcliente.lenght",Object.keys(resp).length)
            if(Object.keys(resp).length > 0){
              resolve({emailrepetido:true})
            }else if(Object.keys(resp).length == 0){
              resolve({emailrepetido:false})
            }else{
              resolve({emailrepetido:false})
            }
            
          }
        )

      })
    }
  }

}
