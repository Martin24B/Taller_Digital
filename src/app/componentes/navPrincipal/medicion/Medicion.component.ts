import { Component, Input, OnInit, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MockProductosService } from '../../secProductos/ServiceProductos';
import { Producto } from '../../secProductos/Productos';
import { ProductosComponent } from '../../secProductos/SecProductos.component';

@Component({
    selector: 'app-medicion-generico',
    standalone: true,
    imports: [CommonModule, FormsModule, ProductosComponent],
    template: '<app-productos [productos]="productos"></app-productos>'
})

export class MedicionComponent implements OnInit, OnChanges {
    // Recibe el tipo de herramientas a mostrar (manuales, eléctricas o industriales)
    @Input() tipo: 'niveles' | 'cintas' | 'calibradores' | 'transportadores' | 'reglas' | null = null;
    // Lista de productos cargados desde el servicio
    public productos: Producto[] = [];
    // Inyección del servicio mock que proporciona los productos
    private mockService = inject(MockProductosService);
    /**
      * Hook de ciclo de vida que se ejecuta una sola vez al inicializar el componente.
      * Carga los productos de la categoría inicial.
      */
    public ngOnInit(): void {
        this.cargarProductos();
    }
    /**
    * Hook que se ejecuta cada vez que cambia alguna propiedad @Input.
    * En este caso, recarga los productos si cambia el tipo de herramientas.
    */
    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['tipo'] && !changes['tipo'].firstChange) {
            this.cargarProductos();
        }
    }
    /**
     * Método que obtiene los productos según el tipo actual
     * y los asigna a la lista para ser mostrados en pantalla.
     */
    private cargarProductos(): void {
        if (this.tipo) {
            this.mockService.obtenerMediciones(this.tipo).subscribe(lista => {
                this.productos = lista;
            });
        } else {
            this.productos = [];
        }
    }
}
