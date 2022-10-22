import { Component, Input, IterableDiffers, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.scss']
})
export class ArtDetailComponent implements OnInit {
  @Input() item: any
  artLink = ''
  dateCheck(startDate:string,endDate:string){
    let output = ''
    startDate==endDate?output='('+startDate+')':output='('+startDate+' - '+endDate+')'
    return output
  }
  constructor() { }
  ngOnInit(): void {
    this.artLink = 'https://www.artic.edu/iiif/2/'+this.item.image_id+'/full/843,/0/default.jpg'
    

  }

}
