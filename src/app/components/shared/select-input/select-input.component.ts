import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() options!: string[];
  @Input() placeholder!: string;
  @Input() styles!: string;
  @Output() multipleInputValue: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() singleInputValue: EventEmitter<string> = new EventEmitter<string>();
  filteredOptions!: string[];
  selectedOptions: string[] = [];
  selectedOption!: string;
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
      this.singleInputValue.emit(option);
    }
    this.isInputFocused = false;
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

  toggleDropDown() {
    if (this.isInputFocused) this.isInputFocused = false;
  }

  onClickedOutside() {
    this.isInputFocused = false;
  }

  ngOnChanges() {
    if (this.options) {
      this.filteredOptions = this.options;
    }
  }

  ngOnInit() {
    console.log(this.styles)
  }
}
