import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-generico',
  standalone: true,
  templateUrl: './SecUsuario.component.html',
  styleUrls: ['./SecUsuario.component.css'],
})
export class SecUsuariosComponent implements OnInit {
  @Input() tipo: 'ingreso' | 'registro' | null = null;

  ngOnInit(): void {
    alert('Sección de usuarios en mantenimiento:');
  }
}
