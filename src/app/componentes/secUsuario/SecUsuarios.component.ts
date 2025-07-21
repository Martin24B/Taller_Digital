import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios-generico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './SecUsuarios.component.html',
  styleUrls: ['./SecUsuarios.component.css'],
})
export class SecUsuariosComponent implements OnInit {
  @Input() tipo: 'ingreso' | 'registro' | null = null;

  ngOnInit(): void {
    alert('Sección de usuarios en mantenimiento:');
  }
}
