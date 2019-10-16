import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../modelo/Producto';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private urlEndPoint:string = 'http://localhost:9010/inventario/'

  private httpHeaders= new HttpHeaders({'Content-type':'application/json'})
  constructor(private http:HttpClient) { }

  obtenerProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlEndPoint + 'productos');
  }

  crearProducto(producto: Producto):Observable<Producto>{
    return this.http.post<Producto>(this.urlEndPoint + 'crear-producto', producto, {headers: this.httpHeaders});
  }

  borrarProducto(id:number): Observable<Producto>{
    return this.http.delete<Producto>(`${this.urlEndPoint}/${id}`, {headers:this.httpHeaders})
  }

  modificarProducto(producto:Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.urlEndPoint}modificar-producto/${producto.id}`,producto,{headers:this.httpHeaders})
  }

  buscarProducto(id):Observable<Producto>{
    return this.http.get<Producto>(`${this.urlEndPoint}producto/${id}`)
  }

}
