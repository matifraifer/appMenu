import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos.interfaces';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css'],
})
export class ComidasComponent implements OnInit {
  
  public productos : Producto[] = []

  @Input() categoria1   : string = ' '
  @Input() categoria2   : string = ' '
  @Input() categoria3   : string = ' ' 
  @Input() categoria4   : string = ' '
  @Input() categoria5   : string = ' '
  @Input() categoria6   : string = ' '
  @Input() categoria7   : string = ' '
  @Input() categoria8   : string = ' '
  @Input() categoria9   : string = ' '
  @Input() categoria10  : string = ' '
  @Input() categoria11  : string = ' '
  @Input() categoria12  : string = ' '
  @Input() categoria13  : string = ' '
  @Input() localElegido: Producto[] = [];

  constructor(
    private scroller: ViewportScroller,
    private router: Router
  ){}
  filterPost = ' ';
  ngOnInit(): any {
  }
  
}
