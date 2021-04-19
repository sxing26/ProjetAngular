import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { HomeComponent } from './home/home.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { SingleProductComponent} from './single-product/single-product.component';

const routes: Routes = [
  {path : 'products' , 
  component: AllProductsComponent},
  {path : 'products/:id' , 
  component: SingleProductComponent},
  {path : '' , 
  component: HomeComponent},
  {path : 'cart' , 
  component: ProductCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
