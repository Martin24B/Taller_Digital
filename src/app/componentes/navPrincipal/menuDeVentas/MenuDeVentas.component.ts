import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

type Categoria = 'herramientas' | 'medicion' | 'proteccion' | 'suministros';
type Subcategoria = | 'manuales' | 'electricas' | 'industriales' | 'digitales' | 'analogicos' | 'auditiva' | 'visual' | 'corporal' | 'pegamentos' | 'aceites' | 'lijas' | 'clavos'; 

@Component({
  selector: 'app-menu-de-ventas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './MenuDeVentas.component.html',
  styleUrls: ['./MenuDeVentas.component.css'],
})

export class MenuDeVentas {
  // Controla los eventos asociados a cada recurso del menu de navegación
  @Output() cambioContenido = new EventEmitter<{ categoria: Categoria; subcategoria: Subcategoria | null }>();
  // Variables de control para cada menú (solo una debe estar en true a la vez)
  public mostrarHerramientas = false;
  public mostrarMedicciones = false;
  public mostrarProtecciones = false;
  public mostrarSuministros = false;
  public mostrarUsuarios = false;
  public mostrarContactos = false;

  /**
   * Muestra el menú indicado por el parámetro 'menu'.
   * Si el menú ya estaba abierto, lo cierra.
   * Además, cierra todos los demás menús para asegurar que solo uno esté visible.
   */
  public mostrarMenu(menu: string): void {
  // Emitir el evento con la categoria seleccionada, para que el componente padre sepa el cambio
  this.cambioContenido.emit({ categoria: menu as Categoria, subcategoria: null });
  
  // Si quieres mantener las variables locales para mostrar/ocultar, ajustalas según sea necesario
  this.mostrarHerramientas = menu === 'herramientas' ? !this.mostrarHerramientas : false;
  this.mostrarMedicciones = menu === 'mediciones' ? !this.mostrarMedicciones : false;
  this.mostrarProtecciones = menu === 'protecciones' ? !this.mostrarProtecciones : false;
  this.mostrarSuministros = menu === 'suministros' ? !this.mostrarSuministros : false;
  this.mostrarUsuarios = menu === 'usuarios' ? !this.mostrarUsuarios : false;
  this.mostrarContactos = menu === 'contactos' ? !this.mostrarContactos : false;
}


  // Cambia el contenido del recurso asociado al menú de navegación
  public seleccionarSubmenu(categoria: Categoria, subcategoria: Subcategoria) {
    this.cambioContenido.emit({ categoria, subcategoria });
  }
}
