import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HERRAMIENTAS_MANUALES, HERRAMIENTAS_ELECTRICAS, HERRAMIENTAS_INDUSTRIALES } from './MockHerramientas.service';
import { MEDICION_NIVELES, MEDICION_CINTAS, MEDICION_CALIBRADORES, MEDICION_TRANSPORTADORES, MEDICION_REGLAS } from './MockMediciones.service';
import { PROTECCION_ROPA, PROTECCION_GUANTES, PROTECCION_CASCOS } from './MockProtecciones.service';
import { SUMINISTRO_PEGAMENTOS, SUMINISTRO_ACEITES, SUMINISTRO_LIJAS, SUMINISTRO_CLAVOS } from './MockSuministros.service';
import { Producto } from './Productos';

@Injectable({
  providedIn: 'root'
})

export class MockProductosService {
  public obtenerHerramientas(tipo: string): Observable<Producto[]> {
    switch (tipo) {
      case 'manuales': return of(HERRAMIENTAS_MANUALES);
      case 'electricas': return of(HERRAMIENTAS_ELECTRICAS);
      case 'industriales': return of(HERRAMIENTAS_INDUSTRIALES);
      default: return of([]);
    }
  }

  public obtenerMediciones(tipo: string): Observable<Producto[]> {
    switch (tipo) {
      case 'niveles': return of(MEDICION_NIVELES);
      case 'cintas': return of(MEDICION_CINTAS);
      case 'calibradores': return of(MEDICION_CALIBRADORES);
      case 'transportadores': return of(MEDICION_TRANSPORTADORES);
      case 'reglas': return of(MEDICION_REGLAS);
      default: return of([]);
    }
  }

  public obtenerProtecciones(tipo: string): Observable<Producto[]> {
    switch (tipo) {
      case 'ropa': return of(PROTECCION_ROPA);
      case 'guantes': return of(PROTECCION_GUANTES);
      case 'cascos': return of(PROTECCION_CASCOS);
      default: return of([]);
    }
  }

  public obtenerSuministros(tipo: string): Observable<Producto[]> {
    switch (tipo) {
      case 'pegamentos': return of(SUMINISTRO_PEGAMENTOS);
      case 'aceites': return of(SUMINISTRO_ACEITES);
      case 'lijas': return of(SUMINISTRO_LIJAS);
      case 'clavos': return of(SUMINISTRO_CLAVOS);
      default: return of([]);
    }
  }
}