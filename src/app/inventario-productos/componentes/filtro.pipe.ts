import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const resultado = [];
    for (const producto of value) {
      if (producto.nombre.toString().toLowerCase().indexOf(arg.toString().toLowerCase()) > -1) {
        resultado.push(producto);
      }
    }
    return resultado;

  }
}
