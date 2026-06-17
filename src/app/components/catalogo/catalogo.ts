import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../model/producto';
import { Categoria } from '../../model/categoria';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo implements OnInit {
  private productoService = inject(ProductoService);

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  categorias: Categoria[] = [
    { idCategoria: 0, nombre: 'Todos' },
    { idCategoria: 1, nombre: 'Vinos' },
    { idCategoria: 2, nombre: 'Piscos' },
    { idCategoria: 3, nombre: 'Corchos' }
  ];

  filtroCategoria: number = 0;
  filtroNombre: string = '';

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.aplicarFiltros();
      },
      error: (err) => console.error('Error al cargar productos:', err)
    });
  }

  aplicarFiltros(): void {
    this.productosFiltrados = this.productos.filter(producto => {
      const coincideCategoria = this.filtroCategoria === 0 || producto.categoria.idCategoria === this.filtroCategoria;
      const coincideNombre = producto.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase());
      return coincideCategoria && coincideNombre;
    });
  }
}