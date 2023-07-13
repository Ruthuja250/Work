import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacupComponent } from './Teacup/teacup/teacup.component';
import { UpperLidComponent } from './UpperLid/upper-lid/upper-lid.component';
import { BootomLidComponent } from './BottomLid/bootom-lid/bootom-lid.component';
import { BodyComponent } from './Body/body/body.component';
import { SmoothComponent } from './Smooth/smooth/smooth.component';
import { DashBoardComponent } from './DashBoard/dash-board/dash-board.component';
import { SampleComponent } from './Sample/sample/sample.component';
import { ProductComponent } from './product/product.component';
import { SuggestedProductComponent } from './suggested-product/suggested-product.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path:'Reflective',component:TeacupComponent },
  { path:'UpperLid', component:UpperLidComponent},
  { path:'BottomLid', component:BootomLidComponent},
  { path:'Body', component:BodyComponent  },
  { path:'Smooth', component:SmoothComponent},
  { path:'Dashboard', component:DashBoardComponent},
  { path:'Sample', component:SampleComponent},
  { path:'Product', component:ProductComponent},
  { path:'SuggestedProduct', component:SuggestedProductComponent },
  { path:'Products',component:ProductsComponent },
  { path:'Product-Details', component:ProductDetailsComponent },
  { path:'Header',component:HeaderComponent},
  { path:'Footer',component:FooterComponent },
  { path:'Cart',component:CartComponent },
  { path:'Order',component:OrderComponent },
  { path:'',redirectTo:'/Dashboard',pathMatch:'full' }, 
  { path:'**',component:PageNotFoundComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
