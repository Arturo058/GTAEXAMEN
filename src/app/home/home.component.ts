import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  @ViewChild('audioSa') audioSa!: ElementRef<HTMLAudioElement>;
  // Repite para los otros audios

  constructor(private router: Router) {}

  controlarMusica(event: Event, juego: string) {
    const details = event.target as HTMLDetailsElement;
    const audio = this[`audio${juego}` as keyof this] as ElementRef<HTMLAudioElement>;
    
    if (details.open) {
      audio.nativeElement.play();
    } else {
      audio.nativeElement.pause();
      audio.nativeElement.currentTime = 0;
    }
  }

  buscarSeccion(termino: string) {
    const secciones: {[key: string]: string} = {
      'inicio': '/',
      'personajes': '/personajes',
      'vehiculos': '/vehiculos',
      'historia': '/historia',
      'ranking': '/#ranking',
      'contacto': '/#contacto'
    };

    const ruta = secciones[termino.toLowerCase()];
    if (ruta) {
      this.router.navigateByUrl(ruta);
    } else {
      alert(`No se encontró: "${termino}". Prueba con: "Personajes", "Vehículos", etc.`);
    }
  }

  enviarFormulario(event: Event) {
    event.preventDefault();
    alert('Formulario enviado (simulado)');
    // Aquí iría la lógica real para enviar el formulario
  }
}
