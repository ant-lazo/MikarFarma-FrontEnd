import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../pages/login/auth.service';
import { Usuario } from '../pages/login/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private router: Router, private http: HttpClient, private authSer: AuthService){}

  canActivate(): Promise<boolean> {
    
      return new Promise(resolve =>{
        if(sessionStorage.getItem('token')!=null){

          if(this.isTokenExpirado()){
            this.authSer.logout();
            this.router.navigate(['/login']);
            resolve(false);
          }

          resolve(true);

        }else{
          //recargar pagina
          this.router.navigateByUrl('/login');
          resolve(false);
        }
      })

  }
  
      isTokenExpirado():boolean{
        let token = this.authSer.token;
        let payload = this.authSer.obtenerDatosToken(token);
        let now = new Date().getTime() / 1000;
        if(payload.exp< now){
          return true;
        }
        return false;
      }

}
