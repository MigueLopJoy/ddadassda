import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalCodeSelectorComponent } from './postal-code-selector.component';

describe('PostalCodeSelectorComponent', () => {
  let component: PostalCodeSelectorComponent;
  let fixture: ComponentFixture<PostalCodeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostalCodeSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostalCodeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
