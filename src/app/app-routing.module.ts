import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioProductosComponent } from './inventario-productos/componentes/listar/listar-productos.component';
import { CrearComponent } from './inventario-productos/componentes/crear/crear-producto.component';

const routes: Routes = [
  {path:'', redirectTo:'/inventario/productos', pathMatch:'full'},
  {path:'inventario/productos', component:InventarioProductosComponent},
  {path:'inventario/crear-producto', component:CrearComponent},
  {path: 'inventario/crear-producto/:id', component:CrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
