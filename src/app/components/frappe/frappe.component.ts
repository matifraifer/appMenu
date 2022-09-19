import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos.interfaces';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-frappe',
  templateUrl: './frappe.component.html',
  styleUrls: ['./frappe.component.css']
})
export class FrappeComponent implements OnInit {
  public showSpinner: boolean = true;
  nombreLocal : string = 'FRAPPE'

  productos         : Producto[] = [];
  pizzas            : string = 'pizzas'
  lomos             : string = 'lomos'    
  hamburguesas      : string = 'hamburguesa'
  desayuno          : string = 'desayuno'
  cafeTradicional   : string = 'cafe tradicional'
  cafeInternacional : string = 'cafe internacional'
  licuados          : string = 'licuados'
  jugos             : string = 'jugos'
  tostados          : string = 'tostados'
  papasFritas       : string = 'papas fritas'
  wafflesDulces     : string = 'waffles dulces'
  wafflesSalados    : string = ' s'
  malteadas         : string = 'malteadas'
  constructor(
    public _servicioService: ServicioService,
    public route:ActivatedRoute
    ){}

  ngOnInit(): void {
    this.getProductosFrappe()
  }
  getProductosFrappe(){
    this._servicioService.getFrappe().subscribe(
      data =>{
      this.productos = [];
      data.forEach((element:any) => {
       this.productos.push({
         id: element.payload.doc.id,
         ...element.payload.doc.data()
       })
     })
     this.showSpinner = false
    });
  }

}
