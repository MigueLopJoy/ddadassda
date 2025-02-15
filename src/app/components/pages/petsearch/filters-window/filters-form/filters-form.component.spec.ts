import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersFormComponent } from './filters-form.component';

describe('FiltersFormComponent', () => {
  let component: FiltersFormComponent;
  let fixture: ComponentFixture<FiltersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
