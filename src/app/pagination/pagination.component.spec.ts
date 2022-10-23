import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to next/prev page',()=>{
    expect(component.currentPage).toEqual(1)
    component.nextPage()
    expect(component.currentPage).toEqual(2)
    component.prevPage()
    expect(component.currentPage).toEqual(1)
  })
  it('should not go to PrevPage if on page1',()=>{
    expect(component.currentPage).toEqual(1)
    component.prevPage()
    expect(component.currentPage).toEqual(1)
  })
});
