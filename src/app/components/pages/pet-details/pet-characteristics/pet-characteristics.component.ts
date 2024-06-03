import { Component, Input } from '@angular/core';
import { Characteristics } from '../../../../core/types/characteristics/characteristics';

@Component({
  selector: 'app-pet-characteristics',
  standalone: true,
  imports: [],
  templateUrl: './pet-characteristics.component.html',
  styleUrl: './pet-characteristics.component.css'
})
export class PetCharacteristicsComponent {

  petCharacteristics: Characteristics = {
    "Apto con perros": false,
    "sociable": true,
    "Activo": true,
    "juguetón": true,
    "Apto con otros animales": false
  } 

  characteristicKeys!: String[];

  allPetCharacteristics: string[] = [
    "Apto con gatos",
    "Apto con niños",
    "Apto con otros animales",
    "Apto con perros",
    "Nervioso",
    "Independiente",
    "Protector",
    "Dominante",
    "Territorial",
    "Escapista",
    "Tímido",
    "Miedoso",
    "Activo",
    "Juguetón",
    "Tranquilo",
    "Cariñoso",
    "Dócil",
    "Obediente",
    "Sociable"
  ]

  isCharacteristicTrue(characteristic: string) {
    return this.petCharacteristics[characteristic];
  }

  ngOnInit() {
    this.characteristicKeys = Object.keys(this.petCharacteristics);
  }

}
