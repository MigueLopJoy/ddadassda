import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalTypeSelectorComponent } from './animal-type-selector.component';

describe('AnimalTypeSelectorComponent', () => {
  let component: AnimalTypeSelectorComponent;
  let fixture: ComponentFixture<AnimalTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalTypeSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimalTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
