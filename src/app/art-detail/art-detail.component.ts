import { Component, Input, IterableDiffers, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.scss'],
})
export class ArtDetailComponent implements OnInit {
  @Input() item: {
    title: string;
    style_titles: string[];
    artist_title:string
    date_start: string;
    date_end: string;
    image_id: number;
    medium_display: string;
    place_of_origin: string;
  } = {
    title: 'default',
    style_titles: ['default'],
    artist_title:'default',
    date_start: '1900',
    date_end: '1900',
    image_id: 0,
    medium_display: 'default',
    place_of_origin: '',
  };
  artLink = '';


  dateCheck(startDate: string, endDate: string) {
    //create year format

    let output = '';
    startDate == endDate
      ? (output = '(' + startDate + ')')
      : (output = '(' + startDate + ' - ' + endDate + ')');
    return output;
  }
  constructor() {}
  ngOnInit(): void {
    try {
      this.artLink =
        'https://www.artic.edu/iiif/2/' +
        this.item.image_id +
        '/full/843,/0/default.jpg';
    } catch {
      this.artLink = 'src/assets/images/Art_Institute_of_Chicago_logo.svg';
    }
  }
}
