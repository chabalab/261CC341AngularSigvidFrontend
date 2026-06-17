import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private http = inject(HttpClient);

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${environment.url}/producto`);
  }

  getProductosByCategoria(idCategoria: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${environment.url}/producto/categoria/${idCategoria}`);
  }

  getProductosByNombre(nombre: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${environment.url}/producto/nombre/${nombre}`);
  }
}