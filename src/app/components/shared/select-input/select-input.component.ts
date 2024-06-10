import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ClickOutsideDirective } from '../../../core/directives/click-outside/click-outside.directive';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [FormsModule, NgClass, ClickOutsideDirective, CheckboxComponent],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.css'
})
export class SelectInputComponent {

  @Input() options!: string[];
  @Input() childComponent!: Component;
  @Output() inputValue: EventEmitter<string[]> = new EventEmitter<string[]>();
  filteredOptions!: string[];
  selectedOptions: string[] = [];
  isInputFocused: boolean = false;
  searchText: string = "";


  toggleBreedCheck(selected: boolean, option: string) {
    if (selected) {
      this.selectedOptions.push(option);
    } else {
      let optionIndex = this.selectedOptions.indexOf(option);
      if (optionIndex > -1) {
        console.log(optionIndex)
        this.selectedOptions.splice(optionIndex, 1)
      }
    }
    this.inputValue.emit(this.selectedOptions);
  }
  
  normalizeString(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  onSearchChange(searchValue: string) {
    const normalizedSearchValue = this.normalizeString(searchValue);
    this.filteredOptions = this.options.filter(option => {
      return this.normalizeString(option).includes(normalizedSearchValue);
    })  
  }

  showDropDown() {
    this.isInputFocused = true;
  }

  onClickedOutside() {
    this.isInputFocused = false;
  }

  ngOnChanges() {
    if (this.options) {
      this.filteredOptions = this.options;
    }
  }
}
