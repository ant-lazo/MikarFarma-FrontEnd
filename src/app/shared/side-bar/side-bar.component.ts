import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/login/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  nomb! : string;
  apel! : string;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    
    this.nomb =  this.authService.usuario.nombre;
    this.apel =  this.authService.usuario.apellido;
  
  }

  //cerrar sesion
  logout(){
    
    Swal.fire('Has cerrado sesion', `Hola ${this.authService.usuario.nombre} , has cerrado sesión con éxito`, 'success');
    this.authService.logout();
    this.router.navigate(['/login']);
    //averiguar codigo para recargar pagina (falta porque asi no funciona bien)
    
  }

}
