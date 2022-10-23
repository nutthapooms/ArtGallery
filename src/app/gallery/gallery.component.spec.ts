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

  it('shoud sort title correctly',()=>{
    const mockTitle:{ title: string; }[] = [{title:'Desmond'},{title:'Albert 1'},{title:'2 testing'},{title:'_Cerial'},{title:'Z123'},{title:'3000test'}]
    expect(component.titleSort(mockTitle)).toEqual([ Object({ title: '2 testing' }), Object({ title: '3000test' }), Object({ title: 'Albert 1' }), Object({ title: 'Desmond' }), Object({ title: 'Z123' }), Object({ title: '_Cerial' }) ])
  })
  it('shoud sort artist_title correctly',()=>{
    const mockArtist_Title:{ artist_title: string; }[] = [{artist_title:'Desmond'},{artist_title:'Albert 1'},{artist_title:'2 testing'},{artist_title:'_Cerial'},{artist_title:'Z123'},{artist_title:'3000test'}]
    expect(component.artisttitleSort(mockArtist_Title)).toEqual([ Object({ artist_title: '2 testing' }), Object({ artist_title: '3000test' }), Object({ artist_title: 'Albert 1' }), Object({ artist_title: 'Desmond' }), Object({ artist_title: 'Z123' }), Object({ artist_title : '_Cerial' }) ])
  })
  it('should sort date_start',()=>{
    const mockStartDate: {date_start:string}[] = [{date_start:'1900'},{date_start:'-123'},{date_start:'-899'},{date_start:'1932'}]
    expect(component.dateSort(mockStartDate)).toEqual([Object({date_start:'-899'}),Object({date_start:'-123'}),Object({date_start:'1900'}),Object({date_start:'1932'})])
  })

  // it('check connectivity',async ()=>{
  //   expect(component.currentItem.length).toEqual(1)
  //   component.callArt()
  //   expect(component.currentItem.length).toEqual(8)

  // })

});
