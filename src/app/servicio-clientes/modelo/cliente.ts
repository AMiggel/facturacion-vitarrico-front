import { Factura } from 'src/app/servicio-factura/modelo/factura';

export class Cliente {

id:number;

nombre:string;

apellido:string;

email:string;

fechaCreacion:Date;

facturas:Array<Factura>;

}

