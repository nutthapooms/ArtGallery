import { Component,Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

@Injectable()
export class AppComponent {
  constructor(
  ) {
  }
  title:string = 'ArtGallery'
  currentPage = 1
  currentSort = 'title'
  currentfilter:any
  currentArtworks = []
  adding = 2
  
  changePage(page:number){
    this.currentPage = page

    //reset filter every time page changes
    this.currentfilter = []

  }
  changeSort(sort:string){
    this.currentSort = sort
  }
  changeFilter(filter:any){
    this.currentfilter = filter 
  }
  changeCurrentArtworks(artworks:any){
    this.currentArtworks = artworks
  }

  

}

function InjectableType() {
  throw new Error('Function not implemented.');
}
