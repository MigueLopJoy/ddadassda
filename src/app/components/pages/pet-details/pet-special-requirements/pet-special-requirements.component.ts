import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pet-special-requirements',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pet-special-requirements.component.html',
  styleUrl: './pet-special-requirements.component.css'
})
export class PetSpecialRequirementsComponent {

  petSpecialRequirements: string[] = [
    "Hogar sin perros",
    "Hogar sin otros animales",
    "Adaptación gradual"
  ];

  allSpecialRequirements: string[] = [
    "Seguro PPP",
    "Casa con patio o jardín amplio",
    "Elevada actividad física",
    "Experiencia previa",
    "Conocimientos en adiestramiento",
    "Entrenamiento con adiestrador",
    "Presupuesto para cuidados especiales",
    "Acceso a atención veterinaria especializada",
    "Hogar sin perros",
    "Hogar sin gatos",
    "Hogar sin otros animales",
    "Hogar sin niños",
    "Preferencia por hogar con otros perros",
    "Elevada disponibilidad de tiempo",
    "Adaptación gradual",
    "Recogida en persona",
    "Adopción de cercanía"
  ]

  isLastElement(element: string) {
    return !(this.petSpecialRequirements.indexOf(element) < (this.petSpecialRequirements.length - 1))
  }
}
