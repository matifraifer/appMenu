import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    const resultPost = [];
    for(const local of value){
      if (local.nombre.toString().toLowerCase().indexOf(args.toString().toLowerCase()) > -1){
        resultPost.push(local)
      }
    }
    return resultPost
  }

}
