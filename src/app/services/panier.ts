import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  
export class Panier { 
    private contenuPanier : Product[] = [];
    public remIndex : any = undefined;
    public contenuPanier$ = new Subject<Product[]>();

    constructor(private httpClient: HttpClient) {}

    getContenuPanier() : Product[] {
        return this.contenuPanier;
    }

    ajoutPanier(obj : Product) : void {
        this.contenuPanier.push(obj);
        console.log(this.contenuPanier);
        this.contenuPanier$.next(this.contenuPanier);
    }

    retraitPanier(id : number) : void {
        
        this.remIndex = this.contenuPanier.findIndex(
            (p:any) => p.id === id
          );

        this.contenuPanier.splice(this.remIndex, 1);

        this.contenuPanier$.next(this.contenuPanier);
    }

    comptePanier()  : number {
        return this.contenuPanier.length;
    }
}

  

