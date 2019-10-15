import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventarioProductosComponent } from './inventario-productos/componentes/listar/listar-productos.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ClientesComponent } from './clientes/clientes.component';
import { CrearComponent } from './inventario-productos/componentes/crear/crear-producto.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './inventario-productos/componentes/header/header.component'


@NgModule({
  declarations: [
    AppComponent,
    InventarioProductosComponent,
    ClientesComponent,
    CrearComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
