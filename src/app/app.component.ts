import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private modalService: NgbModal) {
  }

  currentPage = 1
  currentSort = 'title'
  currentfilter:any
  currentArtworks = []

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

  public open(modal: any): void {
    this.modalService.open(modal);
  }

}