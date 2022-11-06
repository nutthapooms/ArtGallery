import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiCallService } from '../api-call.service';
import {imageArray} from '../model'
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() page = 1;
  @Input() sort = 'title';
  @Input() filterSelected: any;
  @Output() artworks = new EventEmitter<any>();

  currentItem: any = [''];
  constructor(private http: ApiCallService) {}

  titleSort(data: { title: string }[]) {
    data.sort((a, b) => {
      if (b.title < a.title) return 1;
      if (b.title > a.title) return -1;
      return 0;
    });
    return data;
  }

  artisttitleSort(data: { artist_title: string }[]) {
    data.sort((a, b) => {
      if (b.artist_title < a.artist_title) return 1;
      if (b.artist_title > a.artist_title) return -1;
      return 0;
    });
    return data;
  }

  dateSort(data: { date_start: string }[]) {
    data.sort((a, b) => {
      if (parseInt(b.date_start)  < parseInt( a.date_start)) return 1;
      if (parseInt(b.date_start)  > parseInt( a.date_start)) return -1;
      return 0;
    });
    return data;
  }

  filter(artStyle: []) {
    //filter each artwork base on filter criteria from filter.component

    let numberOfFilterAdded = 0;
    let numberofAfterCheck = 0;
    if (this.filterSelected[0] != null) {

      //concat selected styles array and style_titles[] in artwork
      numberOfFilterAdded = this.filterSelected.concat(artStyle).length;

      //remove duplicate style
      numberofAfterCheck = [...new Set(this.filterSelected.concat(artStyle))]
        .length;

      //number of style array before remove duplicate should be > after remove dup if artwork has selected styles.
      //else artwork's style(s) not match the selected style.     
      return numberOfFilterAdded > numberofAfterCheck ? true : false;
    } else {
      return true;
    }
  }

  gallerySort(data: any, sortBy: string) {
    switch (sortBy) {
      case 'title':
        return this.titleSort(data);
      case 'artist_title':
        return this.artisttitleSort(data);
      case 'date_start':
        return this.dateSort(data);
    }
    return 0;
  }
  callArt() {
    this.http 
      .get(
        //use pagination http://api.artic.edu/docs/#pagination for better request handling, reduce computing time
        'https://api.artic.edu/api/v1/artworks?page=' + this.page + '&limit=8',
        {
          withCredentials: false,
        }
      )
      .subscribe(
        (data) => {
          this.artworks.emit(data['data']);
          this.currentItem = this.gallerySort(data['data'], this.sort);
        },
        (error) => {
          console.log(error);
          this.currentItem = [
            {
              title: error.statusText,
              style_titles: [],
              artist_title: 'error',
            },
          ];
        }
        
      );

  }

  ngOnInit(): void {
    this.filterSelected = [null];
    this.callArt();
  }
  ngOnChanges(changes: SimpleChanges) {

    //detect page change
    if (changes['page'] != undefined) {
      this.callArt();
    }

    //detect sort change
    if (changes['sort'] != undefined) {
      this.currentItem = this.gallerySort(this.currentItem, this.sort);
    }
  }
}
