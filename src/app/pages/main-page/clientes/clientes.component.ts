import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { functions } from 'src/app/helpers/function';
import { FormclienteComponent } from './formcliente/formcliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class ClientesComponent implements OnInit {


  //variable para nombrar las columnas de nuestra tabla
  displayedColumns: string[] = 
  ['id','nombre','apellido','observar'];

  //variable global que instancie la data que aparecera en la tabla
  dataSource! :MatTableDataSource<Cliente>;

  clientes: Cliente[] =[];

  //variable que avisa cuando hay una expansion a la tabla
  expandedElement!: Cliente | null;

  //variables para definir tamaño de pantalla
  screenSizeSM = false;

  //variable para activar el spinner, saber cuando finaliza la carga de los datos
  loadData = false;

  //el paginador
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //el ordenador
  @ViewChild(MatSort) sort!: MatSort;


  //Es igual que la forma convencional con atributos y this pero este es mas sencillo
  //private clienteService: ClienteService
  //constructor(clienteService: ClientService){this.clienteService =Service;}
  constructor(private clienteService: ClienteService, public dialog: MatDialog) {}

  //aqui deberia ir la funcion de cambar a español la etiqueta del rango a español
  // se traslado al functions

  
  ngOnInit(): void {
    
    
    
    this.getClientes();

      //definir el tamaño de pantalla
    if(functions.tamanoPatalla(0, 767)){
      this.screenSizeSM = true;
    }else{
      this.screenSizeSM = false;
      this.displayedColumns.splice(3,0,'email');
      this.displayedColumns.splice(4,0,'telefono');
      this.displayedColumns.splice(5,0,'createAt');
    }
  }

  getClientes(){

    this.loadData = true;

    this.clienteService.getClientes().subscribe(
      //Son iguales, el segundo es una funcion anonima
      //function(clientes){this.clientes = clientes}
      //clientes => this.clientes = clientes
      (resp:any)=>{
        //map es para que venga por separado cada uno de los atributos que se expecifica
        //es para poder llegar a la propiedad que deseamos, en este caso es telefono
        this.clientes = Object.keys(resp).map(a=>({
          id : resp[a].id,
          nombre : resp[a].nombre,
          apellido : resp[a].apellido,
          telefono : resp[a].telefono,
          email : resp[a].email,
          createAt : resp[a].createAt
        } as Cliente ));
        this.dataSource = new MatTableDataSource(this.clientes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator._intl.itemsPerPageLabel='cantidad de clientes por página';
        this.dataSource.paginator._intl.getRangeLabel = functions.spanishRangeLabel;
        this.dataSource.paginator._intl.firstPageLabel ='Primera página';
        this.dataSource.paginator._intl.lastPageLabel ='Última página';
        this.dataSource.paginator._intl.previousPageLabel ='Página anterior';
        this.dataSource.paginator._intl.nextPageLabel ='Siguente página';

        this.loadData = false;
      }
    )
  }
  
  //aplicando el filtro de busqueda
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //funcion para llamar el dialog de creacion de clientes
  newClient(){
    const dialogRef = this.dialog.open(FormclienteComponent, { panelClass: 'custom-dialog-container'});
  }

}
