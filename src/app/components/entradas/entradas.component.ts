import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos.interfaces';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  @Input() localElegido : Producto [] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
