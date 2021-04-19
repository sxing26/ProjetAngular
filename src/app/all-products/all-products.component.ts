import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/product';
import { ProductRepository } from '../services/product-repository-service';

import { SearchParams } from '../filter/filter.component';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  @Input() product : any;
  allProducts: any = []; 
  allProducts$?: Observable<Product[]>;
  public selectedProduct: any = undefined;
  
  constructor(
    private productRepository: ProductRepository,
  ) { 
    /* this.allProducts = productRepository.getAllProducts(); */
  }

/*  public onClick(productId: any) : void{
    console.log(`Afficher le produit [${productId}]`);
    

    this.selectedProduct = this.allProducts.find(
      (p:any) => p.id === productId
    );

    console.log(this.selectedProduct);
  } */



  ngOnInit(): void {
    this.allProducts$ = this.productRepository
    .getAllProducts()
    .pipe(map((list) => list.results));
  }

  newSearch(params:SearchParams){
    this.allProducts$ = this.productRepository
      .getAllProducts(params)
      .pipe(map((list) => list.results));
}
}
