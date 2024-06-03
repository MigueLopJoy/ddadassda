import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pet-health-details',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pet-health-details.component.html',
  styleUrl: './pet-health-details.component.css'
})
export class PetHealthDetailsComponent {

  petHealthDetails: string[] = [
    "Cuidado constante del pelaje",
    "Productos específicos para piel y pelaje"
  ]

  healthDetails: string[] = [
    "Cuidado constante del pelaje",
    "Productos específicos para piel y pelaje",
    "Tratamientos paliativos",
    "Condiciones ortopédicas",
    "Uso de arnés especial",
    "Dieta especial",
    "Tratamiento médico temporal",
    "Tratamiento médico vitalicio",
    "Atención veterinaria regular",
    "Atención veterinaria especializada",
    "Historial de cirugías",
    "Discapacidad física",
    "Problemas de salud de tipo orgánico",
    "Problemas articulares",
    "Necesidad de rehabilitación",
    "Alergias alimentarias",
    "Alergias no alimentarias",
    "Problemas dentales",
    "Necesidad de suplementación"
  ]

  isLastElement(element: string) {
    return !(this.petHealthDetails.indexOf(element) < (this.petHealthDetails.length - 1))
  }
}
