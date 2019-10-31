import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelo/Producto';
import { InventarioService } from '../../servicio/inventario.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  producto: Producto = new Producto();
  constructor( private servicioInventario: InventarioService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarProducto()
  }
  cargarProducto():void{
    this.activateRoute.params.subscribe(params=> {
      let id = params['id']
      if(id){
        this.servicioInventario.buscarProducto(id).subscribe((producto) => this.producto=producto )
      }
    })
  }

  public crearProducto(): void {
    this.servicioInventario.crearProducto(this.producto)
      .subscribe(usuario => {
        this.router.navigate(['/inventario/crear-producto'])
        Swal.fire('Producto creado con éxito', ' ','success')
      }, error=> Swal.fire(error.error.message,'','error')      
      )
  }

  public modificarProducto():void{
    this.servicioInventario.modificarProducto(this.producto)
    .subscribe(producto => {
      this.router.navigate(['inventario/productos'])
      Swal.fire('Producto modificado','','success')
    })
  }
}
