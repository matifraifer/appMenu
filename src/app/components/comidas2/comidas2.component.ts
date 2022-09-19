import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos.interfaces';


@Component({
  selector: 'app-comidas2',
  templateUrl: './comidas2.component.html',
  styleUrls: ['./comidas2.component.css']
})
export class Comidas2Component implements OnInit {

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
  }

}
