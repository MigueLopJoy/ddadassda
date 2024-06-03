import { Component } from '@angular/core';
import { PetCardComponent } from '../../../shared/pet-card/pet-card.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [PetCardComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {

  foundPets: any = [
    {
      name: "Emiliano",
      breed: "Border Collie",
      birthDay: "01/06/2022",
      sex: 1,
      image: "assets/imgs/pets/pet4.png"
    },
    {
      name: "Mari",
      breed: "Común europeo",
      birthDay: "15/05/2023",
      sex: 0,
      image: "assets/imgs/pets/pet1.png"
    },
    {
      name: "Sandra",
      breed: "Blanco suizo",
      birthDay: "31/12/2020",
      sex: 0,
      image: "assets/imgs/pets/pet5.png"
    },
    {
      name: "Roberto",
      breed: "Labrador",
      birthDay: "01/09/2017",
      sex: 1,
      image: "assets/imgs/pets/pet7.png"
    },
    {
      name: "Ismael",
      breed: "Teddy",
      birthDay: "01/01/2023",
      sex: 1,
      image: "assets/imgs/pets/pet11.png"
    },
    {
      name: "Isabel",
      breed: "Mix Bichón maltés",
      birthDay: "31/03/2024",
      sex: 0,
      image: "assets/imgs/pets/pet8.png"
    }
  ]

}
