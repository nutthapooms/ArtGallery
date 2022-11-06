import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  @Output() sortEvent = new EventEmitter<string>();

  constructor() { }

  sortType:{name:string,value:string}[] = [{name:'Name',value:'title'},{name:'Artist',value:'artist_title'},{name:'Date',value:'date_start'}]

  setSort(){

    //send sort criteria to parent
    this.sortEvent.emit((<HTMLInputElement>document.getElementById('sortForm')).value);
  }
  

}
