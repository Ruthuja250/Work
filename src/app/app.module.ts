import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacupComponent } from './Teacup/teacup/teacup.component';
import { DashBoardComponent } from './DashBoard/dash-board/dash-board.component';
import { UpperLidComponent } from './UpperLid/upper-lid/upper-lid.component';
import { BootomLidComponent } from './BottomLid/bootom-lid/bootom-lid.component';
import { BodyComponent } from './Body/body/body.component';
import { SmoothComponent } from './Smooth/smooth/smooth.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacupComponent,
    DashBoardComponent,
    UpperLidComponent,
    BootomLidComponent,
    BodyComponent,
    SmoothComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
