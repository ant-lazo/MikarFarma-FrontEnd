import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario! : Usuario;
  private _token! : string;

  constructor(private http: HttpClient) { }

  //metodo para capturar el usuario y guardarlo al sessionStorage
  public get usuario(): Usuario{
    if(this._usuario!= null){
      return this._usuario;
    } else if(this._usuario == null && sessionStorage.getItem('usuario')!= null){
      this._usuario =  JSON.parse(sessionStorage.getItem('usuario') as string) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }

  //metodo para capturar el token y guardarlo al sessionStorage
  public get token(): string {
    if(this._token != null){
      return this._token;
    } else if(this._token == null && sessionStorage.getItem('token')!= null){
      this._token = sessionStorage.getItem('token') as string;
      return this._token;
    }
    return "No hay token";
  }

  //loging con el backend Spring y authenticacion
  login(usuario:Usuario): Observable<any>{
    const urlEndpoint= 'http://localhost:8080/oauth/token';
    const credenciales = btoa('angularapp' + ':' + '12345');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded', 
      'Authorization':'Basic '+ credenciales});
    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', usuario.username);
    params.set('password', usuario.password);
    console.log(params.toString());
    return this.http.post<any>(urlEndpoint, params.toString(), {headers: httpHeaders});
  }

  guardarUsuario(accessToken: string): void{
    let payload = this.obtenerDatosToken(accessToken);
    this._usuario = new Usuario();
    this._usuario.nombre = payload.nombre;
    this._usuario.apellido = payload.apellido;
    this._usuario.email = payload.email;
    this._usuario.telefono = payload.telefono;
    this._usuario.username = payload.user_name;
    this._usuario.roles = payload.authorities;
    sessionStorage.setItem('usuario',JSON.stringify(this._usuario));
  }

  guardarToken(accessToken: string): void{
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  obtenerDatosToken(accessToken: string):any{
    if(accessToken != "No hay token"){
      //hay eror en la condicion, ya se arreglo jeje
      console.log(accessToken);
      return JSON.parse(decodeURIComponent(atob(accessToken.split(".")[1])));
    }
    return null;
  }

  //para redirigir al login cuando da retroceder
  isAuthenticated(): boolean{
    let payload =this.obtenerDatosToken(this.token);
    if(payload != null && payload.user_name && payload.user_name.length>0){
      return true;
    }
    return false;
  }

  logout(): void{
    this._token= "No hay token";
    this._usuario=new Usuario();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
    sessionStorage.clear(); 
  }

}
