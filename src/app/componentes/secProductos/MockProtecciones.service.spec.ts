import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from './Productos';
import { PROTECCION_ROPA, PROTECCION_GUANTES, PROTECCION_CASCOS} from './MockProtecciones.service';

@Injectable({
  providedIn: 'root'
})

export class MockProteccionesService {
  public obtenerProtecciones(tipo: string): Observable<Producto[]> {
    switch (tipo) {
      case 'ropa': return of(PROTECCION_ROPA);
      case 'guantes': return of(PROTECCION_GUANTES);
      case 'cascos': return of(PROTECCION_CASCOS);
      default: return of([]);
    }
  }
}
