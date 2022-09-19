import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  locales: Observable<any>
  constructor( 
    firestore: AngularFirestore,
    private activatedRoute: ActivatedRoute

    ) {
      this.activatedRoute.params.subscribe(params =>
        console.log(params)),
      this.locales = firestore.collection('locales').valueChanges()
    }


  ngOnInit(): void {
  }

}
