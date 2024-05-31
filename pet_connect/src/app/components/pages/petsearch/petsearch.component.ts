import { Component } from '@angular/core';
import { FiltersWindowComponent } from './filters-window/filters-window.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@Component({
  selector: 'app-petsearch',
  standalone: true,
  imports: [FiltersWindowComponent, SearchResultsComponent],
  templateUrl: './petsearch.component.html',
  styleUrl: './petsearch.component.css'
})
export class PetsearchComponent {
  showFiltersWindow: boolean = true;
  

  toggleFiltersWindow() {
    this.showFiltersWindow = !this.showFiltersWindow;
  }
}
