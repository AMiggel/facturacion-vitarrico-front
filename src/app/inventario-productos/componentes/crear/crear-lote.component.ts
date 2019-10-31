import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../servicio/inventario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Lote } from '../../modelo/Lote';
import Swal from 'sweetalert2';
import { Producto } from '../../modelo/Producto';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, flatMap} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-crear',
  templateUrl: './crear-lote.component.html',
  styleUrls: ['./crear-lote.component.css']
})
export class CrearLoteComponent implements OnInit {

  lote: Lote = new Lote();
  
  autocompleteProductos = new FormControl();
  productosFiltrados: Observable<Producto[]>;

  constructor(private servicioInventario: InventarioService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }



  ngOnInit() {
    this.cargarLote()
    this.productosFiltrados = this.autocompleteProductos.valueChanges
      .pipe(
        map(value => typeof value === 'string' ? value : value.nombre),
        flatMap(value =>value ? this._filter(value): [])
      );
  }

  mostrarNombre(producto?:Producto):string | undefined{
    return producto? producto.nombre: undefined;
  }
  seleccionarProducto(event: MatAutocompleteSelectedEvent):void {
    let producto = event.option.value as Producto;
    this.lote.nombre = producto.nombre;
    this.lote.precio = producto.precio;
    this.lote.tipoProducto= producto.tipoProducto;
    this.lote.stockMinimo= producto.stockMinimo;

    this.autocompleteProductos.setValue('');
    event.option.focus();
    event.option.deselect();
  }

  private _filter(value: string): Observable<Producto[]> {
    const filterValue = value.toLowerCase();

    return this.servicioInventario.buscarProductoPorNombre(filterValue);
  }



  cargarLote(): void {
    this.activateRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.servicioInventario.buscarLote(id).subscribe((lote) => this.lote = lote)
      }
    })
  }

  public crearLote(): void {
    this.servicioInventario.crearLote(this.lote)
      .subscribe(usuario => {
        this.router.navigate(['/inventario/crear-lote'])
        Swal.fire('Lote creado con éxito', ' ', 'success')
      }, error => Swal.fire(error.error.message, '', 'error')
      )
  }

  public modificarLote(): void {
    this.servicioInventario.modificarLote(this.lote)
      .subscribe(lote => {
        this.router.navigate(['inventario/lotes'])
        Swal.fire('Lote modificado', '', 'success')
      })
  }
}
