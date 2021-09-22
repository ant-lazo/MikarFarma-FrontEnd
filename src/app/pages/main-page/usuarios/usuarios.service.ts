import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuariosc } from './usuariosc';
import { AuthService } from '../../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlEndPoint: string= 'http://localhost:8080/us/usuarios';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private authService: AuthService) { }

  private agregarAuthorizationHeader(){
    let token = this.authService.token;
    if(token!=null){
      return this.httpHeaders.append('Authorization', 'Bearer '+ token);
    }
    return this.httpHeaders;
  }

  //Cambie, de Usuarioc a Usuarioc[] verificar si da luego error 
  getUsuarios(): Observable<Usuariosc[]>{
    return this.http.get<Usuariosc[]>(this.urlEndPoint, {headers: this.agregarAuthorizationHeader()});
  }

}
