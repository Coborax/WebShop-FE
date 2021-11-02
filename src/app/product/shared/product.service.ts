import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {ProductDto} from "./product.dto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<ProductDto[]> {
    return of([
      { name: 'Test Product 1', desc: 'This is a product!! Buy it now!', img: 'assets/box.png' },
      { name: 'Test Product 2', desc: 'This is a product!! Buy it now!', img: 'assets/box.png' },
      { name: 'Test Product 3', desc: 'This is a product!! Buy it now!', img: 'assets/box.png' },
      { name: 'Test Product 4', desc: 'This is a product!! Buy it now!', img: 'assets/box.png' },
      { name: 'Test Product 5', desc: 'This is a product!! Buy it now!', img: 'assets/box.png' },
      { name: 'Test Product 6', desc: 'This is a product!! Buy it now!', img: 'assets/box.png' }
    ]);
  }

}
