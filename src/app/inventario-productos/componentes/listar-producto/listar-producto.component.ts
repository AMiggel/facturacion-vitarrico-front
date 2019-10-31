import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelo/Producto';
import { InventarioService } from '../../servicio/inventario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  productos: Producto[];
  constructor(private servicioInventario: InventarioService,
    private router: Router) { }

  ngOnInit() {
    this.servicioInventario.listarProducto().subscribe(
      producto => this.productos = producto
    );
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
      confirmButtonText: 'Sí, eliminar!',
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
