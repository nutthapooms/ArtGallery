import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  @Output() sortEvent = new EventEmitter<string>();

  constructor() { }
  setSort(){
    this.sortEvent.emit((<HTMLInputElement>document.getElementById('sortForm')).value);
  }
  ngOnInit(): void {
  }

}
