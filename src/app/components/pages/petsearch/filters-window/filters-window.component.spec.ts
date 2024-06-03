import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersWindowComponent } from './filters-window.component';

describe('FiltersWindowComponent', () => {
  let component: FiltersWindowComponent;
  let fixture: ComponentFixture<FiltersWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltersWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
