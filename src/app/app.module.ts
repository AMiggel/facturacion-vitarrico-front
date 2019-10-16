import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventarioProductosComponent } from './inventario-productos/componentes/listar/listar-productos.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CrearComponent } from './inventario-productos/componentes/crear/crear-producto.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './inventario-productos/componentes/header/header.component';
import { FiltroPipe } from './inventario-productos/componentes/filtro.pipe'



@NgModule({
  declarations: [
    AppComponent,
    InventarioProductosComponent,
    CrearComponent,
    HeaderComponent,
    FiltroPipe,
  
    
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
