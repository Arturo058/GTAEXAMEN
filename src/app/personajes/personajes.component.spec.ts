import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  juegos = [
    {
      nombre: 'GTA (1997)',
      personajes: [
        {
          id: '8-ball',
          nombre: '8-Ball',
          rol: 'Personaje destacado - GTA 1',
          descripcion: 'Experto en explosivos que aparece en varios juegos de la saga.',
          imagen: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ac24c3b-64ec-4d25-b418-46ab7ebd6d8c/df8i5uf-0a06bbde-2a13-43a0-8ffe-f299b13edbce.png'
        },
        // Agrega los demás personajes de GTA 1 aquí
      ]
    },
    // Agrega los demás juegos con sus personajes
    {
      nombre: 'GTA III (2001)',
      personajes: [
        {
          id: 'claude',
          nombre: 'Claude',
          rol: 'Protagonista - GTA III',
          descripcion: 'Ex convicto mudo que llega a Liberty City buscando venganza.',
          imagen: 'https://pm1.aminoapps.com/6776/4cb942f0a7f486ca8f9bbef4d39c87eb60d7266dv2_00.jpg'
        },
        // Más personajes de GTA III
      ]
    },
    // Continúa con los demás juegos...
  ];

  constructor(private router: Router) {}

  buscarPersonaje(termino: string) {
    termino = termino.trim().toLowerCase();
    const personajesMap: {[key: string]: string} = {
      // Mapeo de nombres a IDs
      '8-ball': '8-ball',
      'claude': 'claude',
      'tommy vercetti': 'tommy-vercetti',
      'cj': 'carl-johnson',
      // Agrega todos los demás personajes
    };

    const personajeId = personajesMap[termino];
    if (personajeId) {
      const element = document.getElementById(personajeId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Efecto de destello
        element.classList.add('highlight');
        setTimeout(() => element.classList.remove('highlight'), 2000);
      }
    } else {
      alert(`Personaje no encontrado. Prueba con: "CJ", "Claude", "Tommy", etc.`);
    }
  }
}