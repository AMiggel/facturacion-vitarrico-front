import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarLotesComponent} from './inventario-productos/componentes/listar/listar-lotes.component';
import { CrearLoteComponent } from './inventario-productos/componentes/crear/crear-lote.component';
import { ListarComponent } from './servicio-clientes/componentes/listar/listar.component';
import { CrearComponent } from './servicio-clientes/componentes/crear/crear.component';
import { ListarProductoComponent } from './inventario-productos/componentes/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './inventario-productos/componentes/crear-producto/crear-producto.component';

const routes: Routes = [
  {path:'', redirectTo:'/inventario/lotes', pathMatch:'full'},
  {path:'inventario/lotes', component:ListarLotesComponent},
  {path:'inventario/crear-lote', component:CrearLoteComponent},
  {path: 'inventario/crear-lote/:id', component:CrearLoteComponent},
  {path: 'clientes/crear-cliente', component:CrearComponent},
  {path: 'clientes', component:ListarComponent},
  {path: 'inventario/productos', component:ListarProductoComponent},
  {path: 'inventario/crear-producto', component:CrearProductoComponent},
  {path: 'inventario/crear-producto/:id', component:CrearProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
