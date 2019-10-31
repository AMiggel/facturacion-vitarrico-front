import { Component, OnInit } from '@angular/core';
import { Lote } from '../../modelo/Lote';
import { InventarioService } from '../../servicio/inventario.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import * as moment from 'moment';

@Component({
  selector: 'app-listar-lotes',
  templateUrl: './listar-lotes.component.html',
  styleUrls: ['./listar-lotes.component.css']
})
export class ListarLotesComponent implements OnInit {

  lotes: Lote[];

  filtroProductos = '';
  constructor(private servicioInventario: InventarioService,
    private router: Router) { }

  ngOnInit() {
    this.servicioInventario.obtenerLotes().subscribe(
      lote => this.lotes = lote
    );

  }

  calcularDiferenciaFechas(lote: Lote): number {
    var fechaActual = moment()
    var fechaVencimiento = moment(lote.fechaVencimiento)
    var dias = fechaVencimiento.diff(fechaActual, 'days');

    return dias;
  }
  borrarLote(lote: Lote): void {

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
        this.servicioInventario.borrarLote(lote.id).subscribe(
          Response => {
            this.lotes = this.lotes.filter(pro => pro !== lote)
            swalWithBootstrapButtons.fire(
              'Borrado!',
              `Lote ${lote.nombre} eliminado!`,
              'success'
            )
          }
        )

      }
    })
  }


}
