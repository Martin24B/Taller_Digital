import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecContactosComponent } from '../../secContacto/secContacto.component';

@Component({
  selector: 'app-contacto-generico',
  standalone: true,
  imports: [CommonModule, SecContactosComponent],
  templateUrl: './Contacto.component.html',
  styleUrls: ['./Contacto.component.css']
})

export class ContactoComponent {
  public mostrarQuienesSomos = false;
  public mostrarRedesSociales = false;

  public mostrarMenu(menu: string): void {
    this.mostrarQuienesSomos = menu === 'quienesSomos' ? !this.mostrarQuienesSomos : false;
    this.mostrarRedesSociales = menu === 'redesSociales' ? !this.mostrarRedesSociales : false;
  }
}
