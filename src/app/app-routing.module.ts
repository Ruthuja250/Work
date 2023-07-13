import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacupComponent } from './Teacup/teacup/teacup.component';
import { UpperLidComponent } from './UpperLid/upper-lid/upper-lid.component';
import { BootomLidComponent } from './BottomLid/bootom-lid/bootom-lid.component';
import { BodyComponent } from './Body/body/body.component';
import { SmoothComponent } from './Smooth/smooth/smooth.component';

const routes: Routes = [
  {

    path:'Reflective',

    component:TeacupComponent
  },
  {

    path:'UpperLid',

    component:UpperLidComponent
  },
  {

    path:'BottomLid',

    component:BootomLidComponent
  },
  {

    path:'Body',

    component:BodyComponent
  },
  {

    path:'Smooth',

    component:SmoothComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
