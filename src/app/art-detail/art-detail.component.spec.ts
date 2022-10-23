import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDetailComponent } from './art-detail.component';

describe('ArtDetailComponent', () => {
  let component: ArtDetailComponent;
  let fixture: ComponentFixture<ArtDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('return Date properly', () => {
    expect(component.dateCheck('1900','1901')).toEqual('(1900 - 1901)')
    expect(component.dateCheck('1900','1900')).toEqual('(1900)')
  });
});
