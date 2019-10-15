import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioProductosComponent } from './inventario-productos/componentes/listar/listar-productos.component';
import { CrearComponent } from './inventario-productos/componentes/crear/crear-producto.component';

const routes: Routes = [
  {path:'inventario/productos', component:InventarioProductosComponent},
  {path:'inventario/crear-producto', component:CrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
