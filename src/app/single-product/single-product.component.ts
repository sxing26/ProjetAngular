import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductRepository } from '../services/product-repository-service';
import { Panier } from '../services/panier'
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input()
  product: any = undefined;
  product$?: Observable<Product> = undefined;

  

  constructor(
    private productRepository: ProductRepository,
    private cart: Panier,
    private activatedRoute: ActivatedRoute,
    ) {
    }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params.id) {
      this.product$ = this.productRepository
        .getProductById(Number(this.activatedRoute.snapshot.params.id));
    }
  }

  clickPanier(obj : Product): void {
    this.cart.ajoutPanier(obj);
  }
}
