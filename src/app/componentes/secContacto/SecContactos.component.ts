import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos-generico',
  standalone: true,
  templateUrl: './SecContactos.component.html',
  styleUrls: ['./SecContactos.component.css']
})

export class SecContactosComponent implements OnInit {
  @Input() tipo: 'quienesSomos' | 'redesSociales' | null = null;

  ngOnInit(): void {
    alert('La sección de contacto está en mantenimiento');
  }
}
