import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from './Productos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './SecProductos.component.html',
  styleUrls: ['./SecProductos.component.css'],
})

export class ProductosComponent implements OnChanges {
  @Input() productos: Producto[] = [];
  @Input() tipo: string | null = null;  
  // Registro para guardar la cantidad seleccionada por nombre de producto
  public cantidadSeleccionada: Record<string, number> = {};

  // Para cada producto, esta función genera un array de cantidades desde 1 hasta su stock
  public getCantidades(stock: number): number[] {
    const cantidades: number[] = [];
    for (let i = 1; i <= stock; i++) {
      cantidades.push(i);
    }
    return cantidades;
  }

  public comprarAhora(producto: Producto) {
    // Se obtiene la cantidad seleccionada para este producto, o 1 si no hay valor definido
    const cantidad = this.cantidadSeleccionada[producto.nombre] !== undefined ? this.cantidadSeleccionada[producto.nombre] : 1;
    const index = this.buscarProducto(producto);
    if (index !== -1) {
      // El producto existe, verificar su stock
      // Si aprieto comprar se abre un formulario
      this.productos[index].stock -= cantidad;
    }
  }

  // Se almacenan los productos en un array y de confirmar la compra, se recorre
  public agregarAlCarrito(producto: Producto): void {
    // Se obtiene la cantidad seleccionada para este producto, o 1 si no hay valor definido
    const cantidad = this.cantidadSeleccionada[producto.nombre] !== undefined ? this.cantidadSeleccionada[producto.nombre] : 1;
    // Se busca el índice del producto en el array 'productos'
    const index = this.buscarProducto(producto);
    if (index !== -1) {
      this.productos[index].stock -= cantidad;
    }
  }

  // Busca un producto en la lista y devuelve su índice, o -1 si no lo encuentra
  public buscarProducto(producto: Producto): number {
    for (const [i, p] of this.productos.entries()) {
      if (this.productoEncontrado(p, producto)) {
        return i;
      }
    }
    return -1;
  }

  // Compara dos productos por nombre
  public productoEncontrado(p: Producto, producto: Producto): boolean {
    return p.nombre === producto.nombre;
  }

  // El método se ejecuta automáticamente cada vez que se modifican los valores de los 'Input' del componente
  public ngOnChanges(changes: SimpleChanges): void {
    // Verifica si hubo un cambio en el input 'productos' y que el array esté definido
    if (changes['productos'] && this.productos != undefined) {
      // Recorre todos los productos actuales
      for (const producto of this.productos) {
        // Si todavía no se definió una cantidad para este producto, se inicializa en 1 por defecto
        if (this.cantidadSeleccionada[producto.nombre] == undefined) {
          this.cantidadSeleccionada[producto.nombre] = 1;
        }
      }
    }
  }
}
