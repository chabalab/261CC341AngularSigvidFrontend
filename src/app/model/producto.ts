import { Categoria } from './categoria';
import { Marca } from './marca';

export interface Producto {
  idProducto: number;
  codigoProducto: string;
  nombre: string;
  precioReferencial: number;
  stockMinimo: number;
  categoria: Categoria;
  marca: Marca;
}