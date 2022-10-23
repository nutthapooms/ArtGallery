import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [ FilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should group style correctly from Style A - E',()=>{
    const mockAllArt = [{"style_titles": ["A","B"]},{"style_titles": ["A"]},{"style_titles": ["C"]},{"style_titles": ["D","E"]}]

    //should count style from first one appear (A) to last one (E)
    expect(component.getAllArtStyles(mockAllArt)).toEqual([{ style: 'A', Unit: 2 },{ style: 'B', Unit: 1 },{ style: 'C', Unit: 1 },{ style: 'D', Unit: 1 },{ style: 'E', Unit: 1 }])
  })

  
});
