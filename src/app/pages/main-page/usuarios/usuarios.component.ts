import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuariosc } from './usuariosc';
import { UsuariosService } from './usuarios.service';
//Angular Material
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { functions } from 'src/app/helpers/function'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  animations: [
      trigger('detailExpand', [
      state('collapsed, void', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
      ])
      ]
})
export class UsuariosComponent implements OnInit {

  //variable para nombrar las columnas de nuestra tabla en AMaterial
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'observar'];

  //variable que instacia la data que aparecera en la tabla
  dataSource! : MatTableDataSource<Usuariosc>;

  //variable de la clase usuariosc
  usuarioc: Usuariosc[]=[];

  //variable que informa una expancion a la tabla
  expandedElement!: Usuariosc | null;

  //variables para definir tamaño de pantalla
  screenSizeSM = false;

  // ordenador
  @ViewChild(MatSort) sort!: MatSort;

  //variable para activar el spinner, saber cuando finaliza la carga de los datos
  loadData = false;

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {

    this.getUsuarios();

    //definir el tamaño de pantalla
    if(functions.tamanoPatalla(0, 767)){
      this.screenSizeSM = true;
    }else{
      this.screenSizeSM = false;
      this.displayedColumns.splice(1, 0,'username');
      this.displayedColumns.splice(2, 0, 'enabled');
      this.displayedColumns.splice(5, 0, 'email');
      this.displayedColumns.splice(6, 0, 'telefono');
      //this.displayedColumns.splice(7, 0, 'roles');
    }

  }

  getUsuarios(){

    this.loadData = true;

    this.usuarioService.getUsuarios().subscribe((resp:any)=>{
      this.usuarioc = Object.keys(resp).map(a=> ({
        id : resp[a].id,
        username :resp[a].username,
        password : resp[a].password,
        enabled : resp[a].enabled,
        nombre : resp[a].nombre,
        apellido : resp[a].apellido,
        email : resp[a].email,
        telefono : resp[a].telefono,
        roles: resp[a].roles
      } as Usuariosc ));
      //console.log("dfjk", this.usuarioc[0].roles[1].nombre);
      this.dataSource = new MatTableDataSource(this.usuarioc);
      //console.log("trajo el usuario con MatTable", this.dataSource);
      this.dataSource.sort = this.sort;
      this.loadData = false;
    })
  }

  

}
