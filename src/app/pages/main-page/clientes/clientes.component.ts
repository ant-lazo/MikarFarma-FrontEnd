import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes! : Cliente[];

  //Es igual que la forma convencional con atributos y this pero este es mas sencillo
  //private clienteService: ClienteService
  //constructor(clienteService: ClientService){this.clienteService =Service;}
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      //Son iguales, el segundo es una funcion anonima
      //function(clientes){this.clientes = clientes}
      clientes => this.clientes = clientes
    );
  }

}
