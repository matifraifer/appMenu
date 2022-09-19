import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-antares',
  templateUrl: './antares.component.html',
  styleUrls: ['./antares.component.css']
})
export class AntaresComponent implements OnInit {
  productos: any [] = [];

  constructor(
    private _servicioService: ServicioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProductosAntares()
   }

  getProductosAntares(){
    this._servicioService.getAntares().subscribe(data => {
      this.productos = [];
      data.forEach((element: any) => {
        this.productos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }

 
}
