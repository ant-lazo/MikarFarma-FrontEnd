import { Component, OnInit } from '@angular/core';
//FromBuilder para el reactivo
import { FormBuilder, Validator, Validators } from '@angular/forms';
//importar la clase para el helpers
import { functions } from 'src/app/helpers/function';
//importar la clase usuario
import { Usuario } from './usuario';
//importar la clase Service auth.service.ts
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
//Sweetalert
import Swal, {SweetAlertIcon} from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //grupo de controles para el login reactivo

  public f = this.form.group({
    username:['', Validators.required],
    password:['', Validators.required]
  })

  usuario: Usuario;

  //Para validar el envio del formulario

  formSubmitted = false;

  constructor(private form: FormBuilder, private authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
   }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      Swal.fire('Login', `Hola ${this.authService.usuario.nombre} ya estás authenticado(a)`, 'info')
      this.router.navigate(['/']);
    }
  }

  //inicia la funcion login
  login(){
    //validamos que el fomulario haya sido enviado
    this.formSubmitted = true;
    //validamos que el formulario este correcto
    if(this.f.invalid){
      return;
    }

    //capturando la informacion y ponerlo en un objeto usuario
    this.usuario.username =this.f.controls.username.value;
    this.usuario.password= this.f.controls.password.value;

    console.log(this.usuario.username);
    console.log(this.usuario.password);
    console.log("---------");
    console.log(this.usuario);

    //ejecutamos el servicio de login
    this.authService.login(this.usuario).subscribe(
      (response) =>{
      console.log(response);
      //con el response.access_token capturamos el token
      let payload =JSON.parse(atob(response.access_token.split(".")[1]));
      console.log(payload);

      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);

      let usuario = this.authService.usuario;
      //averiguar codigo para recargar pagina (falta porque asi no funciona bien)
      this.router.navigateByUrl("/");
      //Swal.fire(`Bienvenido(a) ${response.nombre}`, "Iniciaste sesion con éxito", "success");
      Swal.fire(`Bienvenido(a) ${usuario.nombre}`, "Iniciaste sesion con éxito", "success");

    },
      (err)=>{
        if(err.status == 400){
        console.log("err", err);
        Swal.fire('Error', "Usuario o clave incorrectas", "error");
        }
    }

    );
  }

  //validamos los campos del formulario login
  invalidField(field:string){
    
    return functions.invalidField(field, this.f, this.formSubmitted);
    
  }

}
