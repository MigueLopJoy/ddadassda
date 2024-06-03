import { Component, Input } from '@angular/core';
import { PetCharacteristicsComponent } from './pet-characteristics/pet-characteristics.component';
import { PetSpecialRequirementsComponent } from './pet-special-requirements/pet-special-requirements.component';
import { PetHealthDetailsComponent } from './pet-health-details/pet-health-details.component';
import { PetAboutComponent } from './pet-about/pet-about.component';
import { PetLocationCardComponent } from './pet-location-card/pet-location-card.component';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [
    PetCharacteristicsComponent, 
    PetSpecialRequirementsComponent, 
    PetHealthDetailsComponent, 
    PetAboutComponent, 
    PetLocationCardComponent
  ],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent {

  @Input() petInfo!: any; 
  
  petHealthRequirements: string[] = [];

  healthDetails: string[] = [
    "Cuidado constante del pelaje",
    "Uso de productos específicos para piel y pelaje",
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
}
