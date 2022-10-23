import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import {
  HttpClientModule,
  HttpEventType,
  HttpEvent,
} from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      declarations: [GalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('check connectivity',async ()=>{
  //   expect(component.currentItem.length).toEqual(1)
  //   component.callArt()
  //   expect(component.currentItem.length).toEqual(8)

  // })

});
