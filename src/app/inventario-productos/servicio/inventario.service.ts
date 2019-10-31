import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lote } from '../modelo/Lote';
import { Producto } from '../modelo/Producto';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private urlEndPoint:string = 'http://localhost:9010/inventario/'

  private httpHeaders= new HttpHeaders({'Content-type':'application/json'})
  constructor(private http:HttpClient) { }

  obtenerLotes():Observable<Lote[]>{
    return this.http.get<Lote[]>(this.urlEndPoint + 'lotes');
  }

  crearLote(lote: Lote):Observable<Lote>{
    return this.http.post<Lote>(this.urlEndPoint + 'crear-lote', lote, {headers: this.httpHeaders});
  }

  borrarLote(id:number): Observable<Lote>{
    return this.http.delete<Lote>(`${this.urlEndPoint}/${id}`, {headers:this.httpHeaders})
  }

  modificarLote(lote:Lote): Observable<Lote> {
    return this.http.put<Lote>(`${this.urlEndPoint}modificar-lote/${lote.id}`,lote,{headers:this.httpHeaders})
  }

  buscarLote(id):Observable<Lote>{
    return this.http.get<Lote>(`${this.urlEndPoint}lote/${id}`)
  }

  crearProducto(producto:Producto):Observable<Producto>{
    return this.http.post<Producto>(this.urlEndPoint+'crear-producto', producto,{headers:this.httpHeaders});
  }

  listarProducto():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlEndPoint + 'productos');
  }

  borrarProducto(id:number): Observable<Producto>{
    return this.http.delete<Producto>(`${this.urlEndPoint}producto/ ${id}`, {headers:this.httpHeaders})
  }

  
  modificarProducto(producto:Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.urlEndPoint}modificar-producto/${producto.id}`,producto,{headers:this.httpHeaders})
  }
  buscarProducto(id):Observable<Producto>{
    return this.http.get<Producto>(`${this.urlEndPoint}producto/${id}`)
  }
  buscarProductoPorNombre(nombre:string):Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.urlEndPoint}productos/${nombre}`)
   }

}
