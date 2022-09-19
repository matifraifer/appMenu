import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/interfaces/productos.interfaces';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-data-post',
  templateUrl: './data-post.component.html',
  styleUrls: ['./data-post.component.css']
})
export class DataPostComponent implements OnInit {

  crearProducto: FormGroup;
  submited = false;

  constructor(
    private fb: FormBuilder,
    private _servicioServoce: ServicioService
  ) {
    this.crearProducto = this.fb.group({
      nombre: [' ', Validators.required],
      tipo: [' ', Validators.required],
      categoria: [' ', Validators.required],
      descripcion: [' ', Validators.required],
      precio: [0 , Validators.required]
    })
   }

  ngOnInit(): void {
  }

  agregarProducto(){

    if(this.crearProducto.invalid){
      return;
    }
    const nuevoProducto: any = {
      nombre : this.crearProducto.value.nombre,
      tipo : this.crearProducto.value.tipo,
      categoria : this.crearProducto.value.categoria,
      descripcion : this.crearProducto.value.descripcion,
      precio : this.crearProducto.value.precio,
    }

    this._servicioServoce.agregarProducto(nuevoProducto).then(() => 
    console.log('Producto Registrado', nuevoProducto))

    this.crearProducto.reset()

    
  }

}
