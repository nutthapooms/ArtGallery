import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  currentItem = []

  constructor(
    private http : HttpClient
  ) { }
  callArt(){
    this.http.get<any>('https://api.artic.edu/api/v1/artworks?page=4&limit=8',{
      withCredentials : false
    }).subscribe(data=>{
      this.currentItem = data.data
      console.log(data)
    })
  }

  ngOnInit(): void {
    this.callArt()
  }

}
