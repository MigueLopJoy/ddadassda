import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetSpecialRequirementsComponent } from './pet-special-requirements.component';

describe('PetSpecialRequirementsComponent', () => {
  let component: PetSpecialRequirementsComponent;
  let fixture: ComponentFixture<PetSpecialRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetSpecialRequirementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetSpecialRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
