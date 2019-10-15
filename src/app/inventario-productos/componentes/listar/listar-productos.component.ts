import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelo/Producto';
import { InventarioService } from '../../servicio/inventario.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import * as moment from 'moment';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class InventarioProductosComponent implements OnInit {

  productos: Producto[];


  constructor(private servicioInventario: InventarioService,
    private router: Router) { }

  ngOnInit() {
    this.servicioInventario.obtenerProductos().subscribe(
      productos => this.productos = productos

    );




  }

  calcularDiferenciaFechas(producto: Producto): number {
    var fechaActual = moment()
    var fechaVencimiento = moment(producto.fechaVencimiento)
    var dias = fechaVencimiento.diff(fechaActual, 'days');
    console.log(dias)
    return dias;
  }
  borrarProducto(producto: Producto): void {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
      title: 'Está seguro?',
      text: "Esta acción no se puede revertir!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.servicioInventario.borrarProducto(producto.id).subscribe(
          Response => {
            this.productos = this.productos.filter(pro => pro !== producto)
            swalWithBootstrapButtons.fire(
              'Borrado!',
              `Producto ${producto.nombre} eliminado!`,
              'success'
            )
          }
        )

      }
    })
  }


}
