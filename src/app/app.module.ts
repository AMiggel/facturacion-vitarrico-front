import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarLotesComponent } from './inventario-productos/componentes/listar/listar-lotes.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CrearLoteComponent } from './inventario-productos/componentes/crear/crear-lote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './inventario-productos/componentes/header/header.component';
import { FiltroPipe } from './inventario-productos/componentes/filtro.pipe';
import { ListarComponent } from './servicio-clientes/componentes/listar/listar.component'
import { CrearComponent } from './servicio-clientes/componentes/crear/crear.component';
import { CrearProductoComponent } from './inventario-productos/componentes/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './inventario-productos/componentes/listar-producto/listar-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [
    AppComponent,
    ListarLotesComponent,
    CrearLoteComponent,
    HeaderComponent,
    FiltroPipe,
    ListarComponent,
    CrearComponent,
    CrearProductoComponent,
    ListarProductoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
