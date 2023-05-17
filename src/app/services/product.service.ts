import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse , HttpStatusCode } from '@angular/common/http';
import { Product } from "../models/product.model";
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public urlBse:string = 'https://fakestoreapi.com';

  constructor(
    private http:HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Product[]>(`${this.urlBse}/products`)
    .pipe(
      catchError((error:HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Conflict) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El producto no esxiste');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No estas permitido');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  getAllCategories(){
    return this.http.get<Product[]>(`${this.urlBse}/products/categories`)
    .pipe(
      catchError((error:HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Conflict) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El producto no esxiste');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No estas permitido');
        }
        return throwError('Ups algo salio mal');
      })
    );
  }

  getProductsByCategory(category:string){

    return this.http.get<Product[]>(`${this.urlBse}/products/category/${category}`)
    .pipe(
      catchError((error:HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Conflict) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El producto no esxiste');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No estas permitido');
        }
        return throwError('Ups algo salio mal');
      })
    );
  }




}
