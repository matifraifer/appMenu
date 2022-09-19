import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/productos.interfaces';
import { orderBy } from '@firebase/firestore';
@Pipe({
  name: 'categorias'
})

export class CategoriasPipe implements PipeTransform {
  

  transform(producto: Producto[], cat: string = ' '): Producto[] {
    const productosFiltrados = producto.filter(prod => prod.categoria?.includes(cat)).sort(
      function (a ,b ){
        if(a.nombre > b.nombre){
          return 1
        } if(a.nombre < b.nombre){
          return -1
        }else{
          return 0
        }
      }
    );
    return productosFiltrados
  }



}
