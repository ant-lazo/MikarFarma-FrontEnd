import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(): Promise<boolean> {
    
      return new Promise(resolve =>{
        if(sessionStorage.getItem('token')!=null){

          //validar que el token sea real
          

          resolve(true);
        }else{
          //recargar pagina
          this.router.navigateByUrl('/login');
          resolve(false);
        }
      })
  }

}
