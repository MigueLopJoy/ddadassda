import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ClickOutsideDirective } from '../../../core/directives/click-outside/click-outside.directive';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { InputOptionComponent } from '../input-option/input-option.component';

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [FormsModule, NgClass, ClickOutsideDirective, CheckboxComponent, InputOptionComponent],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.css'
})
export class SelectInputComponent {

  @Input() multiple!: boolean;
  @Input() options!: string[] | undefined;
  @Input() placeholder!: string;
  @Input() inputStyles!: string;
  @Input() globalStyles!: string;
  @Input() inputError!: boolean;
  @Input() selectedOption!: string;
  @Output() multipleInputValue: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() singleInputValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() input: EventEmitter<string> = new EventEmitter<string>();
  filteredOptions!: string[] | undefined;
  selectedOptions: string[] = [];
  isInputFocused: boolean = false;
  searchText: string = "";

  toggleCheckOption(selected: boolean, option: string) {
    if (selected) {
      this.selectedOptions.push(option);
    } else {
      let optionIndex = this.selectedOptions.indexOf(option);
      if (optionIndex > -1) {
        this.selectedOptions.splice(optionIndex, 1)
      }
    }
    this.multipleInputValue.emit(this.selectedOptions);
  }
  
  toggleSingleOption(selected: boolean, option: string) {
    this.selectedOption = selected ? option : "";
    if (selected) {
      this.searchText = option;
      this.singleInputValue.emit(this.selectedOption);
    }
    this.isInputFocused = false;
  }

  normalizeString(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  onSearchChange() {
    const normalizedSearchValue = this.normalizeString(this.searchText);
    this.filteredOptions = this.options?.filter(option => {
      return this.normalizeString(option).includes(normalizedSearchValue);
    })  
    this.input.emit(this.searchText);
  }

  showDropDown() {
    this.isInputFocused = true;
  }

  toggleDropDown() {
    this.isInputFocused = !this.isInputFocused;
  }

  onClickedOutside() {
    this.isInputFocused = false;
  }

  setOptions(options: string[]) {
      this.filteredOptions = options;
      this.searchText = "";
  }

  isInputError() {
    return (this.inputError || (this.filteredOptions && this.filteredOptions.length < 1))
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const prop in changes) {
      if (prop === 'options') {
        this.setOptions(changes[prop].currentValue);
      } else if (prop === 'selectedOption') {
        this.searchText = changes[prop].currentValue;
      }
    }
  }
}
