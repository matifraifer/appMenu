import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { FrappeComponent } from './components/frappe/frappe.component';
import { AntaresComponent } from './components/antares/antares.component';
import { DataPostComponent } from './components/data-post/data-post.component';



const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'antares', component: AntaresComponent
  },

  {
    path: 'frappe', component: FrappeComponent
  },
  {
    path: 'dataAdmin', component: DataPostComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
