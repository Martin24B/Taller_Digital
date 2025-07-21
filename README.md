# Taller Digital

## Índice

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características Principales](#características-principales)
- [Tutorial de Instalación](#tutorial-de-instalación)
- [Autores](#autores)

---

## Descripción del Proyecto

Este proyecto es una aplicación web desarrollada en Angular que simula un sitio de venta de herramientas, equipos de medición, protección personal y suministros industriales. La aplicación permite al usuario navegar fácilmente a través de diferentes categorías y subcategorías de productos, mostrando un catálogo organizado y dinámico.

---

## Características Principales

- **Menú desplegable dinámico:** Permite seleccionar categorías y subcategorías para filtrar el catálogo de productos.
- **Ruteo:** La navegación se realiza mediante rutas organizadas bajo la estructura `inicio/`, como por ejemplo `inicio/herramientas/manuales` o `inicio/medicion/niveles`.
- **Componentes reutilizables:** La aplicación utiliza componentes genéricos para mostrar productos según la categoría seleccionada.
- **Interfaces tipadas:** Se emplean interfaces para definir la estructura de los productos y asegurar la consistencia de los datos.
- **Control de flujo en plantillas:** Se utilizan las directivas `*ngFor` y `*ngIf` para renderizar listas y condicionales en la vista.
- **Comunicación entre componentes:** Se implementa mediante `@Input` y `@Output` para gestionar la interacción entre el menú y los componentes de contenido.

  URLs disponibles:
  1. inicio/
  2. inicio/herramientas
  3. inicio/herramientas/manuales
  4. inicio/herramientas/electricas
  5. inicio/herramientas/industriales
  6. inicio/medicion
  7. inicio/medicion/niveles
  8. inicio/medicion/cintas
  9. inicio/medicion/calibradores
  10. inicio/medicion/transportadores
  11. inicio/medicion/reglas
  12. inicio/proteccion
  13. inicio/proteccion/ropa
  14. inicio/proteccion/guantes
  15. inicio/proteccion/cascos
  16. inicio/suministros
  17. inicio/suministros/pegamentos
  18. inicio/suministros/aceites
  19. inicio/suministros/lijas
  20. inicio/suministros/clavos
  21. inicio/usuarios
  22. inicio/usuarios/ingreso
  23. inicio/usuarios/registro
  24. inicio/contactos
  25. inicio/contactos/quienesSomos
  26. inicio/contactos/redesSociales

---

## Tutorial de Instalación

1. Clonar el repositorio:  
   git clone [URL_DEL_REPOSITORIO]  
   cd [NOMBRE_DEL_PROYECTO]

2. Instalar dependencias:  
   npm install

3. Ejecutar la aplicación localmente:  
   ng serve

4. Abrir el navegador en:  
   http://localhost:4200

## Autores

Nombre: [Martin Lorenzi]
DNI: [43865783]
Sede: Tandil
Curso: Seminario Angular 2025
Fecha de entrega: [21/07/2025]
