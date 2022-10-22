import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit,OnChanges {
  @Input() page = 1;
  currentItem = [];

  constructor( private http: HttpClient) {
    
  }

  callArt() {
    console.log('On page: '+this.page)
    this.http
      .get<any>(
        'https://api.artic.edu/api/v1/artworks?page=' + this.page + '&limit=8',
        {
          withCredentials: false,
        }
      )
      .subscribe((data) => {
        this.currentItem = data.data;
        console.log(data);
      });
  }

  ngOnInit(): void {

    this.callArt();
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.callArt();
  }
}
