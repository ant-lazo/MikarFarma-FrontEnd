import { Injectable } from '@angular/core';

import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable,of } from 'rxjs';

//importar la clase httpcliente para taer los datos
import { HttpClient, HttpHeaders } from '@angular/common/http';
//importando el authService para obtener el token
import { AuthService } from '../../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string= 'http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private authService: AuthService) { }

  private agregarAuthorizationHeader(){
    let token = this.authService.token;
    if(token!=null){
      return this.httpHeaders.append('Authorization', 'Bearer '+ token);
    }
    return this.httpHeaders;
  }

  getClientes(): Observable<Cliente[]>{
    //return of(CLIENTES);
    return this.http.get<Cliente[]>(this.urlEndPoint, {headers: this.agregarAuthorizationHeader()});
    
  }

  //tomar data filtrada del email para que no se repita

  getFilterEmail(email: string):Observable<Cliente[]>{
    //console.log("fad",this.http.get<Cliente[]>(`${this.urlEndPoint}/email/${email}`, {headers: this.agregarAuthorizationHeader()}))
    return this.http.get<Cliente[]>(`${this.urlEndPoint}/email/e=${email}`, {headers: this.agregarAuthorizationHeader()});
  }

}
