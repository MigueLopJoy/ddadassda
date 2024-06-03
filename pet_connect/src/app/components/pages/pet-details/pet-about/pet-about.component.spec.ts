import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAboutComponent } from './pet-about.component';

describe('PetAboutComponent', () => {
  let component: PetAboutComponent;
  let fixture: ComponentFixture<PetAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
