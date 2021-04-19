import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Panier } from '../services/panier';


@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})

export class ProductCartComponent implements OnInit {
  @Input() product : any;
  contenuPanier : Product[] = [];

  constructor(
    private cart: Panier,
  ) { 
  }

  removeFromPanier(id : number): void {
    this.cart.retraitPanier(id);

    console.log(this.cart);
  }

  ngOnInit(): void {
    this.contenuPanier = this.cart.getContenuPanier();
  }

}
