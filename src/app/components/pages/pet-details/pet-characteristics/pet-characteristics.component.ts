import { Component, Input } from '@angular/core';
import { PetCharacteristic } from '../../../../core/model/interfaces/pets/petCharacteristics';

@Component({
  selector: 'app-pet-characteristics',
  standalone: true,
  imports: [],
  templateUrl: './pet-characteristics.component.html',
  styleUrl: './pet-characteristics.component.css'
})
export class PetCharacteristicsComponent {

  @Input() petCharacteristics: PetCharacteristic[] = [
    {name: "Apto con perros",  value: false},
    {name: "Sociable", value: true},
    {name: "Activo", value: true},
    {name: 'Juguetón', value: true},
    {name: "Apto con otros animales", value: false}
  ]

}
