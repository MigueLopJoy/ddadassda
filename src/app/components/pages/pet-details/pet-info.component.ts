import { Component, Input } from '@angular/core';
import { PetCharacteristicsComponent } from './pet-characteristics/pet-characteristics.component';
import { PetSpecialRequirementsComponent } from './pet-special-requirements/pet-special-requirements.component';
import { PetHealthDetailsComponent } from './pet-health-details/pet-health-details.component';
import { PetAboutComponent } from './pet-about/pet-about.component';
import { PetLocationCardComponent } from './pet-location-card/pet-location-card.component';
import { Pet } from '../../../core/model/pets/pets';
import { Shelter } from '../../../core/model/shelter/shelter';
import { SocialMedia } from '../../../core/model/shelter/socialMedia';
import { PetCharacteristic } from '../../../core/model/pets/petCharacteristics';
import { PetHealthDetail } from '../../../core/model/pets/petHealthDetails';
import { PetSpecialRequirement } from '../../../core/model/pets/petSpecialRequirements';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetDetails } from '../../../core/model/pets/petDetails';
import { Address } from '../../../core/model/address';

@Component({
  selector: 'app-pet-info',
  standalone: true,
  imports: [
    PetCharacteristicsComponent, 
    PetSpecialRequirementsComponent, 
    PetHealthDetailsComponent, 
    PetAboutComponent, 
    PetLocationCardComponent,
    PetDetailsComponent
  ],
  templateUrl: './pet-info.component.html',
  styleUrl: './pet-info.component.css'
})
export class PetInfoComponent {

  socialMedia: SocialMedia[] = [
    {
      name: 'Instagram',
      link: 'http://www.instagram.com'
    },
    {
      name: 'Facebook',
      link: 'http://www.facebook.com'
    },
    {
      name: 'Tik Tok',
      link: 'http://www.tiktok.com'
    },
    {
      name: 'Twitter',
      link: 'http://www.twitter.com'
    }
  ]

  address: Address = {
    address: 'Calle Principal',
    municipality: 'Encinas Reales',
    postalCode: '14999',
    province: 'Córdoba'
  }

  shelter: Shelter =  {
    name: 'Patitas Solidarias',
    address: this.address,
    socialMedia: this.socialMedia,
    email: 'contacto@patitas.com',
    phoneNumber: '+34 630 21 69 84'
  }

  characteristics: PetCharacteristic[] = [
    {
      name: 'Apto con gatos',
      value: true
    },
    {
      name: 'Apto con otros animales',
      value: true
    },
    {
      name: 'Escapista',
      value: false
    }, 
    {
      name: 'Apto con niños',
      value: false
    }
  ]

  healthDetails: PetHealthDetail[] = []

  specialRequirements: PetSpecialRequirement[] = [
    'Adaptación gradual'
  ]


  petDetails: PetDetails = {
    animalType: 'Perro',
    sex: 'Macho',
    birthDate: "01/06/2022",
    size: 'Grande',
    breed: 'Pastor Alemán',
  }

  petAbout = '';

  @Input() petInfo: Pet = {
    name: 'Firulais',
    petDetails: this.petDetails,
    characteristics: this.characteristics,
    healthDetails: this.healthDetails,
    specialRequirements: this.specialRequirements,
    shelter: this.shelter,
    imageURL: 'assets/imgs/pets/pet4.png'
  }; 

  getObjectEntries(obj: Object) {
    return Object.entries(obj)
  }
}
