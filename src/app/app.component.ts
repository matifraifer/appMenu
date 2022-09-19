import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { onInstanceCreatedCallback } from '@firebase/component/dist/src/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  frappe = "frappe"


  locales: Observable<any[]>
  constructor(firestore: AngularFirestore){
    this.locales = firestore.collection('locales').valueChanges();
  }
}
