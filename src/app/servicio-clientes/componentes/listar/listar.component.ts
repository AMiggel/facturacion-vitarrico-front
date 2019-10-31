import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../modelo/cliente';
import { ClienteService } from '../../servicio/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes:Cliente[];

  constructor(private servicioCliente: ClienteService) { }

  ngOnInit() {
  this.servicioCliente.obtenerClientes().subscribe(
    clientes => this.clientes=clientes
  );
  }

}
