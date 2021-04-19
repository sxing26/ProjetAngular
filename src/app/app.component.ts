import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Panier } from './services/panier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjetAngular';
  compte : number = 0;
  compte$? : Observable<number>;

  constructor(
    private cart: Panier,
  ){
  }

  ngOnInit(): void {
    this.compte$ = this.cart.contenuPanier$.pipe(map(t => t.length));  

    console.log(this.compte);
  }
}
