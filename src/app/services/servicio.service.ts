import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Producto } from '../interfaces/productos.interfaces';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  
  constructor(private firestore: AngularFirestore) { 
  }
  
  
  
  getFrappe(): Observable<any>{
    return this.firestore.collection('frappe').snapshotChanges()
  }

  getAntares(): Observable<any>{
    return this.firestore.collection('antares').snapshotChanges()
  }

  agregarProducto(producto: Producto[]): Promise<any>{
    return this.firestore.collection('frappe').add(producto)
  }

  
}
