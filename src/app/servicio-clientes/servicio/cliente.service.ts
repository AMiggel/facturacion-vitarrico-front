import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente} from '../modelo/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string ='http://localhost:9001/clientes'
  private httpHeaders= new HttpHeaders({'Content-type':'application/json'})
  constructor(private http:HttpClient) { }

  obtenerClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlEndPoint)
  }

  crearCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint + '/crear-cliente',cliente,{headers:this.httpHeaders});
  }
}
