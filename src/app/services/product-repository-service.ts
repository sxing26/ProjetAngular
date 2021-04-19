import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ProductList } from '../model/productlist';
import { Product } from '../model/product';


@Injectable({
    providedIn: 'root',
  })
  export class ProductRepository {
    private allProducts = [
      {
        id: 1,
        name: 'Produit1',
        price: 50,
        disponibility: 'stock running low',
        vehicleBrand: 'Volkswagen',
        vehicleModel: 'Polo',
        vehicleYear: 2020,
        productSet: 'arrière',
        image: '',
        added: '2021-03-17T14:46:46.250Z',
      },
      {
        id: 2,
        name: 'Produit2',
        price: 60,
        disponibility: 'out of stock',
        vehicleBrand: 'Volkswagen',
        vehicleModel: 'Golf',
        vehicleYear: 2019,
        productSet: 'arrière',
        image: '',
        added: '2021-03-17T14:46:46.250Z',
      },
      {
        id: 3,
        name: 'Produit3',
        price: 70,
        disponibility: 'available',
        vehicleBrand: 'Toyota',
        vehicleModel: 'Corolla',
        vehicleYear: 2018,
        productSet: 'intégral',
        image: '',
        added: '2021-03-17T14:46:46.250Z',
      },
    ];
    constructor(private httpClient: HttpClient) {}

 /*   public getAllProducts(){
      return this.allProducts;
    } */

    getAllProducts(params?: {name?: string; status?: string; alive?: boolean; }) {
      let paramStr = '';
  
      if (params?.name){
        paramStr += `name=${params.name}&`;
      }

      if (params?.status){
        paramStr += `status=${params.status}&`;
      }

      if (params?.alive && params?.status === '') {
        paramStr += `status=${'alive'}&`;
      }
  
  
      return this.httpClient.get<ProductList>(
        `https://rickandmortyapi.com/api/character?${paramStr}`
      );
    }

   /* public getProductById(id: number){
      return this.allProducts.find(
        (p:any) => p.id === id
      )
    } */

    getProductById(id: number) {
      return this.httpClient.get<Product>(
        `https://rickandmortyapi.com/api/character/${id}`
      );
    }
    
  }  