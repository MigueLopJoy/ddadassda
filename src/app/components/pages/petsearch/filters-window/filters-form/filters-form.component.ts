import { Component, EventEmitter, Output } from '@angular/core';
import { CheckboxComponent } from '../../../../shared/checkbox/checkbox.component';
import { BreedSelectorComponent } from './breed-selector/breed-selector.component';
import { FormBuilder } from '@angular/forms';
import { PetSearchRquest } from '../../../../../core/model/pets/petSearchRequest';
import { InputRadioComponent } from '../../../../shared/input-radio/input-radio.component';
import { AnimalType } from '../../../../../core/model/pets/animalTypes';
import { Sex } from '../../../../../core/model/pets/sex';

@Component({
  selector: 'app-filters-form',
  standalone: true,
  imports: [InputRadioComponent, CheckboxComponent, BreedSelectorComponent],
  templateUrl: './filters-form.component.html',
  styleUrl: './filters-form.component.css'
})
export class FiltersFormComponent {

  constructor(
    private formBuilder: FormBuilder
  ) {}

  @Output() petSearchRquest: EventEmitter<PetSearchRquest> = new EventEmitter<PetSearchRquest>();

  petSearchData: PetSearchRquest = {
    animalType: null,
    sex: null,
    age: null,
    breed: null,
    healthDetails: null,
    shelter: null
  }

  petSearchForm = this.formBuilder.group(
    {
      animalType: null,
      sex: null,
      age: null,
      breed: null,
      healthDetails: null,
      shelter: null
    }
  )

  selectInputValue(inputValue: AnimalType | Sex) {
    if (inputValue === 'Perro' || inputValue ===  'Gato' || inputValue ===  'Otro') {
      this.petSearchData.animalType = inputValue;
    } else if (inputValue === 'Macho' || inputValue ===  'Hembra') {
      this.petSearchData.sex = inputValue;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
  }

  maleIcon: string = `
    <svg class='h-6 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 345.6 345.6'>
      <path fill='rgb(2 132 199)' d='M336.843,8.927c-5.959-5.976-14.148-9.174-22.594-8.787L211.774,4.758c-16.551,0.746-29.365,14.769-28.619,31.32
          c0.746,16.552,14.789,29.342,31.32,28.619l24.955-1.125l-32.602,32.602c-21.324-13.469-46.053-20.681-71.893-20.681
          c-36.061,0-69.963,14.042-95.459,39.541c-52.637,52.635-52.637,138.281,0,190.917c25.496,25.499,59.398,39.54,95.459,39.54
          c36.061,0,69.961-14.041,95.459-39.54c45.348-45.348,51.623-115.193,18.834-167.326l32.701-32.701l-1.195,24.942
          c-0.793,16.55,11.979,30.608,28.529,31.402c0.49,0.023,0.975,0.035,1.461,0.035c15.906,0,29.17-12.505,29.941-28.564l4.898-102.193
          C345.97,23.115,342.804,14.904,336.843,8.927z M187.97,263.526c-14.166,14.165-33,21.966-53.033,21.966
          c-20.035,0-38.869-7.801-53.033-21.966c-29.242-29.243-29.242-76.823,0-106.066c14.164-14.165,33-21.966,53.033-21.966
          s38.869,7.801,53.033,21.966C217.212,186.701,217.212,234.282,187.97,263.526z' />
    </svg>   
  `;

  femaleIcon: string = `
    <svg class='h-6 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.141 477.141'>
      <path fill='rgb(2 132 199)' stroke='rgb(2 132 199)' stroke-width='30' d='M326.711,341.99h-64.628v-64.634c0-0.686-0.142-1.323-0.213-1.997c65.409-11.119,115.378-68.161,115.378-136.681
      C377.249,62.208,315.044,0,238.571,0C162.103,0,99.892,62.208,99.892,138.678c0,68.521,49.973,125.562,115.375,136.681
      c-0.059,0.674-0.204,1.312-0.204,1.997v64.634h-64.631c-12.983,0-23.501,10.527-23.501,23.502c0,12.98,10.518,23.507,23.501,23.507
      h64.637v64.64c0,12.98,10.524,23.502,23.501,23.502c12.979,0,23.513-10.527,23.513-23.502v-64.64h64.628
      c12.986,0,23.508-10.526,23.508-23.507C350.219,352.518,339.698,341.99,326.711,341.99z M146.904,138.678
      c0-50.546,41.121-91.673,91.667-91.673c50.549,0,91.676,41.122,91.676,91.673s-41.127,91.667-91.676,91.667
      C188.031,230.346,146.904,189.224,146.904,138.678z' />
    </svg> 
  `;
}
