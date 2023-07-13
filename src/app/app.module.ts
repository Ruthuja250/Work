import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacupComponent } from './Teacup/teacup/teacup.component';
import { DashBoardComponent } from './DashBoard/dash-board/dash-board.component';
import { UpperLidComponent } from './UpperLid/upper-lid/upper-lid.component';
import { BootomLidComponent } from './BottomLid/bootom-lid/bootom-lid.component';
import { BodyComponent } from './Body/body/body.component';
import { SmoothComponent } from './Smooth/smooth/smooth.component';
import { SampleComponent } from './Sample/sample/sample.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { SuggestedProductComponent } from './suggested-product/suggested-product.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenProductsDirective } from './open-products.directive';
import { OpenProductDetailsDirective } from './open-product-details.directive';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TeacupComponent,
    DashBoardComponent,
    UpperLidComponent,
    BootomLidComponent,
    BodyComponent,
    SmoothComponent,
    SampleComponent,
    ProductComponent,
    SuggestedProductComponent,
    ProductsComponent,
    ProductDetailsComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    OpenProductsDirective,
    OpenProductDetailsDirective,
    CartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
