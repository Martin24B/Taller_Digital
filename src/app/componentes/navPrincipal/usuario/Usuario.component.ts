import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecUsuariosComponent } from '../../secUsuario/SecUsuarios.component';
import { Ingreso } from '../ingreso/ingreso';
import { Registro } from '../registro/registro';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, SecUsuariosComponent, Ingreso, Registro],
  templateUrl: './Usuario.component.html',
  styleUrls: ['./Usuario.component.css'],
})
export class UsuarioComponent {
  public mostrarIngreso = false;
  public mostrarRegistro = false;

  public mostrarMenu(menu: string): void {
    this.mostrarIngreso = menu === 'ingreso' ? !this.mostrarIngreso : false;
    this.mostrarRegistro = menu === 'registro' ? !this.mostrarRegistro : false;
  }
}
