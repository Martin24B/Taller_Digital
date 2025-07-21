import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDeVentas } from './componentes/navPrincipal/menuDeVentas/MenuDeVentas.component';
import { HerramientasComponent } from './componentes/navPrincipal/herramientas/Herramientas.component';
import { MedicionComponent } from './componentes/navPrincipal/medicion/Medicion.component';
import { ProteccionComponent } from './componentes/navPrincipal/proteccion/Proteccion.component';
import { SuministrosComponent } from './componentes/navPrincipal/suministros/Suministros.component';
import { SecUsuariosComponent } from './componentes/secUsuario/SecUsuarios.component';
import { SecContactosComponent } from './componentes/secContacto/SecContacto.component';
import { HeaderComponent } from './componentes/header/Header.component';
import { FooterComponent } from './componentes/footer/Footer.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

// Tipos específicos para cada categoría
type Categoria =
  | 'herramientas'
  | 'medicion'
  | 'proteccion'
  | 'suministros'
  | 'usuarios'
  | 'contactos';
type TipoHerramienta = 'manuales' | 'electricas' | 'industriales';
type TipoMedicion =
  | 'niveles'
  | 'cintas'
  | 'calibradores'
  | 'transportadores'
  | 'reglas';
type TipoProteccion = 'ropa' | 'guantes' | 'cascos';
type TipoSuministro = 'pegamentos' | 'aceites' | 'lijas' | 'clavos';
type TipoUsuarios = 'ingreso' | 'registro';
type TipoContactos = 'quienesSomos' | 'redesSociales';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MenuDeVentas,
    HerramientasComponent,
    MedicionComponent,
    ProteccionComponent,
    SuministrosComponent,
    HeaderComponent,
    FooterComponent,
    SecUsuariosComponent,
    SecContactosComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('Taller-Digital');
  // Señal para la categoría seleccionada por el usuario
  categoriaActual = signal<Categoria | null>(null);
  // Una señal para cada subcategoría del menu de navegacion
  subcategoriaHerramientas = signal<TipoHerramienta | null>(null);
  subcategoriaMedicion = signal<TipoMedicion | null>(null);
  subcategoriaProteccion = signal<TipoProteccion | null>(null);
  subcategoriaSuministros = signal<TipoSuministro | null>(null);
  subcategoriaUsuarios = signal<TipoUsuarios | null>(null);
  subcategoriaContactos = signal<TipoContactos | null>(null);

  private readonly route = inject(ActivatedRoute);
  // Constructor para capturar parámetros de URL
  public constructor() {
    this.route.url.subscribe(() => {
      const url = window.location.pathname;
      const partes = url.split('/').filter((p) => p);
      if (partes[0] === 'inicio') {
        const categoria = partes[1] as Categoria | undefined;
        const subcategoria = partes[2] || null;
        if (
          categoria &&
          [
            'herramientas',
            'medicion',
            'proteccion',
            'suministros',
            'usuarios',
            'contactos',
          ].includes(categoria)
        ) {
          this.onCambioContenido({ categoria, subcategoria });
        }
      }
    });
  }

  // Control se los recursos del menu de navegacion elegidos por el usuario
  public onCambioContenido(event: {
    categoria: Categoria;
    subcategoria: string | null;
  }) {
    this.categoriaActual.set(event.categoria);
    // Se resetean todas las subcategorías para evitar errores
    this.subcategoriaHerramientas.set(null);
    this.subcategoriaMedicion.set(null);
    this.subcategoriaProteccion.set(null);
    this.subcategoriaSuministros.set(null);
    this.subcategoriaUsuarios.set(null);
    this.subcategoriaContactos.set(null);

    // Asignar subcategoría según la categoría elegida en el menu de navegacion
    switch (event.categoria) {
      case 'herramientas':
        this.subcategoriaHerramientas.set(
          event.subcategoria as TipoHerramienta,
        );
        break;
      case 'medicion':
        this.subcategoriaMedicion.set(event.subcategoria as TipoMedicion);
        break;
      case 'proteccion':
        this.subcategoriaProteccion.set(event.subcategoria as TipoProteccion);
        break;
      case 'suministros':
        this.subcategoriaSuministros.set(event.subcategoria as TipoSuministro);
        break;
      case 'usuarios':
        this.subcategoriaUsuarios.set(event.subcategoria as TipoUsuarios);
        break;
      case 'contactos':
        this.subcategoriaContactos.set(event.subcategoria as TipoContactos);
        break;
    }
  }
}
